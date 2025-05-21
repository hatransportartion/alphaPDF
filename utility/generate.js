const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');
const { generateUniqueFilename } = require('./service');

async function generatePDF(templateJSON, data) {
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
    // console.log("DIrr Name ", __dirname);
    // const templatePath = path.join(__dirname, '../views', `${templateID}.hbs`);

    // // Ensure template file exists
    // if (!fs.existsSync(templatePath)) {
    //   throw new Error(`❌ Template file "${templateID}.hbs" not found in /views`);
    // }

    // const logoPath = path.resolve(__dirname, '../logo/HAlogo.png');
    // const logoBase64 = fs.readFileSync(logoPath, 'base64');
    // data.logoBase64 = logoBase64;


    const template = handlebars.compile(templateJSON.content);
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
