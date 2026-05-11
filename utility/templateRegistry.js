// Maps templateID → which .hbs file and logo to use.
// /generate consults this map first; if hit, it reads from disk and skips
// the DB lookup entirely. If a templateID isn't here, it falls back to DB.
//
// Add a new entry whenever Airtable starts sending a new templateID.

module.exports = {
  // ── HA Transportation ──────────────────────────────────────────────
  // Company Truck Payroll (current GET /template/add registers this one)
  "5c3494c22039433785f1e7a9d7cf4664": {
    hbs: "companyPayroll.hbs",
    logo: "HAlogo.png",
  },
  // Company Truck Payroll (legacy ID — kept so older Airtable rows still work)
  "f16849ca4c68aa38f74abfb83705734d": {
    hbs: "companyPayroll.hbs",
    logo: "HAlogo.png",
  },
  // Driver Payroll (HA)
  "240ea7b35a094098a93d320ecbffcc95": {
    hbs: "payroll.hbs",
    logo: "HAlogo.png",
  },
  // RateCon (HA)
  "6e551c6309b54ae79f7f0ac5af62f0ee": {
    hbs: "ratecon.hbs",
    logo: "HAlogo.png",
  },

  // ── Sarbloh ────────────────────────────────────────────────────────
  "31ef472e8da7454c88e62a433907f275": {
    hbs: "payrollSarbloh.hbs",
    logo: "Sarbloh_Logo1.png",
  },

  // ── 313 Transport ──────────────────────────────────────────────────
  "65a7aded06524362a33daf702ae98c21": {
    hbs: "payroll313Transport.hbs",
    logo: "313_logo1.png",
  },

  // ── Chandi Logistics ───────────────────────────────────────────────
  "cf6fde884a6d44608fe78db22640e69c": {
    hbs: "payrollChandiLogistics.hbs",
    logo: "ChandiLogistics_Logo1.png",
  },

  // ── Apex Lion (Repair Invoice) ─────────────────────────────────────
  // NOTE: this ID was hardcoded as "hughje884a6d44608fe78db22640e69c" in
  // route.js — it is NOT valid hex. Replace with the real templateID that
  // Airtable actually sends, then delete this comment.
  "hughje884a6d44608fe78db22640e69c": {
    hbs: "repairInvoice.hbs",
    logo: "ApexRepair.png",
  },

  "c2hvdWxkYmF0dGxlbmF0aXZlZGlyZWN0": {
    hbs: "DriverPayroll.hbs",
    logo: "HAlogo.png",
  },

  // ── Templates without confirmed IDs yet ────────────────────────────
  // TODO: fill these in once you know what Airtable sends:
  //   "<id>": { hbs: "payrollAlphaLion.hbs",  logo: "Alpha_Lion_Logo.png" },
};
