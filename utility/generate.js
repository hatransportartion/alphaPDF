const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');
const { generateUniqueFilename } = require('./service');

async function generatePDF({content, attachments}, data) {
  try {
    const fileName = generateUniqueFilename();
    let outputFilePath = `/home/app/docs/${fileName}.pdf`;
    const NODE_ENV = process.env.NODE_ENV || 'local';
    console.log("NODE_ENV: ", NODE_ENV);
    console.log("Output File Path: ", outputFilePath);
    if(NODE_ENV === 'local') {
      outputFilePath = `PDFs/${fileName}.pdf`;
    }
    console.log("Output File Path: ", outputFilePath);

    data.attachments = attachments;

    const template = handlebars.compile(content);
    console.log("Template: ", template);
    console.log("Data: ", data);
    const html = template({data});

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.setViewport({ width: 900, height: 1200 });
    await page.pdf({
      path: outputFilePath,
      format: 'A4',
      printBackground: true,
      margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
    });

    await browser.close();
    console.log(`✅ PDF generated: ${outputFilePath}`);
    return { error: false, message: `PDF generated successfully`, path: outputFilePath, fileName: fileName };
  } catch (err) {
    console.error(`❌ Error generating PDF: ${err.message}`);
    throw err;
  }
}

module.exports = {
  generatePDF
};
