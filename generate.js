const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');

// Load template and data
const templateHtml = fs.readFileSync(path.join(__dirname, 'ratecon.hbs'), 'utf8');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));

// Compile Handlebars template
const template = handlebars.compile(templateHtml);
const html = template(data);

// Generate PDF using Puppeteer
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'output.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
  console.log('✅ PDF Generated: output.pdf');
})();
