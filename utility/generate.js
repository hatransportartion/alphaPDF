const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');

async function generatePDF(templateID, data, outputPath = 'output.pdf') {
  try {
    const templatePath = path.join(__dirname, 'views', `${templateID}.hbs`);
    outputPath = path.join(__dirname, 'PDFs', `${templateID}.pdf`);
    // Ensure template file exists
    if (!fs.existsSync(templatePath)) {
      throw new Error(`❌ Template file "${templateID}.hbs" not found in /views`);
    }

    const templateHtml = fs.readFileSync(templatePath, 'utf8');
    const template = handlebars.compile(templateHtml);
    const html = template(data);

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.setViewport({ width: 1200, height: 800 });
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
    });

    await browser.close();
    console.log(`✅ PDF generated: ${outputPath}`);
    return { error: false, message: `PDF generated successfully`, path: outputPath };
  } catch (err) {
    console.error(`❌ Error generating PDF: ${err.message}`);
    throw err;
  }
}

module.exports = {
  generatePDF
};
