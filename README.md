# alphaPDF

alphaPDF is a Node.js / Express service that generates PDF documents (payroll
statements, rate confirmations, repair invoices, etc.) from Handlebars templates.
It renders the HTML to PDF using **Puppeteer** (headless Chromium) and returns
the resulting file. Templates live in `views/` as `.hbs` files; logos live in
`logo/`.

The service is designed to be called from external systems (e.g. Airtable
automations) which `POST` a JSON payload describing which template to use and
what data to render.

## Tech stack

- **Node.js** + Express
- **Handlebars** for templating (`express-handlebars`)
- **Puppeteer** for HTML → PDF
- **Prisma** + **MySQL** (used only for inventory storage and a legacy
  template registry — template content itself is now read from disk)
- **pdf-lib** for merging PDFs

## Project layout

```
alphaPDF/
├── index.js                 Express app entrypoint
├── route.js                 PDF routes (mounted under /pdf)
├── excelRoute.js            Excel export routes (under /excel)
├── adpCSVRoute.js           ADP CSV export routes (under /adp)
├── views/                   Handlebars templates (*.hbs)
├── logo/                    Brand assets used by templates
├── utility/
│   ├── generate.js          Puppeteer rendering + per-page header/footer
│   ├── templateRegistry.js  templateID → { hbs, logo } map
│   ├── pdfmerging.js        PDF merge helper
│   ├── service.js           Misc helpers (unique filenames, URL validation)
│   └── validate.js          Request body validation
├── prisma/
│   ├── schema.prisma        Database schema
│   └── db.js                Prisma client wrappers
└── PDFs/                    Output directory (local dev only)
```

## Prerequisites

- Node.js 18+
- MySQL running locally (only needed for the `/upload-inventory` route and
  the legacy DB-backed template lookup; the file-based path described below
  works without it)

## Setup

```bash
# 1. Clone and install
git clone <repo-url>
cd alphaPDF
npm install

# 2. Create .env
cat > .env <<'EOF'
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/alphadb"
PORT=8000
EOF
```

> **Important:** if your MySQL password contains `@`, URL-encode it as `%40`.
> Example: password `Test57@` becomes `Test57%40` in the URL.

```bash
# 3. Create the database (one-time)
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS alphadb;"

# 4. Sync the Prisma schema and generate the client
npx prisma generate
npx prisma db push
```

## Running

```bash
# Development (auto-reload on file changes)
npm run dev

# Production
npm start
```

The server listens on the port from `.env` (`PORT=8000` by default). All PDF
routes are mounted under `/pdf`, so the generate endpoint is
`http://localhost:8000/pdf/generate`.

## Generating a PDF

`POST /pdf/generate` accepts **two modes**. The handler picks one based on
which fields are present in the body.

### Mode A — direct (recommended for new integrations)

Send the `.hbs` filename and logo filename directly. The service reads them
straight from disk on every request. **No DB lookup**, no registry change
needed when you add a template.

```http
POST /pdf/generate
Content-Type: application/json

{
  "hbsFile": "companyPayroll.hbs",
  "logo":    "HAlogo.png",
  "data":    { ... template variables ... }
}
```

### Mode B — by templateID (backwards-compatible)

Send a `templateID`. The handler resolves it through `utility/templateRegistry.js`
and reads from disk. If the ID isn't in the registry, it falls back to the
old DB-backed lookup.

```http
POST /pdf/generate
Content-Type: application/json

{
  "templateID": "5c3494c22039433785f1e7a9d7cf4664",
  "data":       { ... template variables ... }
}
```

### Response

```json
{
  "error": false,
  "message": "PDF generated successfully",
  "path": "PDFs/<uuid>.pdf",
  "fileName": "<uuid>"
}
```

In local dev, files are written to `PDFs/`. In production
(`NODE_ENV !== 'local'`), they go to `/home/app/docs/`.

## Templates

### Adding a new template

1. **Create the .hbs file** in `views/`. Use existing templates (e.g.
   `companyPayroll.hbs`) as a reference. Conventions:
   - Set `@page { margin: ... }` to reserve room for the per-page
     header/footer (see "Per-page header/footer" below).
   - Use `<header>` and `<footer>` tags **with all styles inline** — they
     are extracted by `utility/generate.js` and rendered by Puppeteer's
     `displayHeaderFooter` in an isolated context where class-based styles
     don't apply reliably.
   - Use Handlebars syntax (`{{data.field}}`, `{{#each data.items}}`) to
     interpolate request data.

2. **Add the logo** to `logo/` if it isn't there already.

3. **Register the templateID** in `utility/templateRegistry.js` so that
   external callers can refer to it by stable ID:

   ```js
   module.exports = {
     // ...
     "your-new-template-id-here": {
       hbs: "yourTemplate.hbs",
       logo: "YourLogo.png",
     },
   };
   ```

   You can skip step 3 if callers will use Mode A (sending `hbsFile`
   directly) — the registry is only needed for the templateID API.

4. **Restart the server** (`npm run dev`) to pick up registry changes.

5. **Test** with a `POST /pdf/generate` request.

### Updating a template

Just edit the `.hbs` file in `views/`. The next call to `/pdf/generate`
re-reads it from disk — no DB sync, no restart needed (unless you also
changed `templateRegistry.js`).

> **Why this matters:** the previous version of this service stored
> template content in MySQL, so file edits had no effect until you
> re-uploaded via `POST /pdf/template`. That trap is gone — files on disk
> are the source of truth now.

### Deleting a template

1. Delete the `.hbs` file from `views/`.
2. Remove the corresponding entry (if any) from `utility/templateRegistry.js`.
3. (Optional) Remove the row from the DB with `DELETE /pdf/template/:templateID`
   if it was previously registered there.

### Per-page header/footer

Templates with `@page { margin-top: ≥50px }` or `margin-bottom: ≥50px`
trigger automatic per-page header/footer rendering:

1. `generate.js` extracts the `<header>` and `<footer>` elements from the
   rendered HTML.
2. They're handed to Puppeteer's native `displayHeaderFooter` mechanism,
   which repeats them on every page.
3. The body content fills the area between the reserved margins.

For this to look right:

- The `@page` top margin must be **≥ the actual rendered height of the
  header** (including any overflow like a logo taller than the band).
- Same for bottom margin and the footer.
- All styles on the header/footer elements must be **inline** (Chrome's
  isolated header context drops class-based rules).

Templates with smaller margins (`<50px`) skip extraction and render the
header/footer inline once at the top/bottom of the body.

## Other endpoints

### `POST /pdf/merge`

Merges multiple PDFs from URLs into one.

```json
{ "docURLs": ["https://...", "https://..."] }
```

### `POST /pdf/template`

Registers a template in the DB (legacy). Prefer `templateRegistry.js`
for new templates.

```json
{
  "templateName": "...",
  "templateID": "...",
  "hbsFileName": "yourTemplate.hbs",
  "logo": "YourLogo.png"
}
```

### `PUT /pdf/template/:templateID`

Updates a DB-registered template.

### `DELETE /pdf/template/:templateID`

Deletes a DB-registered template.

### `POST /pdf/upload-inventory`

Bulk-inserts inventory records into MySQL.

### `/excel/*` and `/adp/*`

Excel export and ADP CSV export routes (see `excelRoute.js` and
`adpCSVRoute.js` for details).

## Postman documentation

https://documenter.getpostman.com/view/40179091/2sB2qUnjnc

## Calling from a remote system (e.g. Airtable)

Local dev runs on `localhost`, which Airtable cloud automations cannot
reach. Expose the local server with a tunnel:

```bash
brew install ngrok
ngrok config add-authtoken <your-token>
ngrok http 8000
```

ngrok prints a public URL like `https://abc123.ngrok-free.app`. Point
Airtable's webhook/script at `https://abc123.ngrok-free.app/pdf/generate`.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes and push the branch.
4. Submit a pull request.

## License

MIT — see the LICENSE file.

## Contact

admin@handatransportation.com
