const express = require("express");
const router = express.Router();
const path = require('path');

const { validateRequestBody } = require("./utility");
const { generatePDF } = require("./generate");

const dotenv = require("dotenv").config();
const asyncHandler = require('express-async-handler');

const { mergeAndSavePDFs } = require("./utility/pdfmerging");
const { generateUniqueFilename } = require("./utility/service");

router.post("/generate", asyncHandler( async (req, res) => {
    console.log(" /generate Route: ");
    const requestBody = req.body;
    if (!requestBody) {
      return res.status(400).json({ error: true, message: "Request body is required" });
    }
  
    const { error, message } = await validateRequestBody(requestBody);
    if (error) {
      return res.status(400).json({ error: true, message });
    }
  
    const { recordID, templateID, data } = requestBody;
    console.log("Record ID: ", recordID);
    console.log("Template ID: ", templateID);
    console.log("Data: ", data);

    const resp = await generatePDF(templateID, data);
    console.log("Response: ", resp);

    const PDFpath = path.join(__dirname, 'PDFs', `${recordID}.pdf`);
    console.log("PDF Path: ", PDFpath);

    res.status(200).json({
      "error": false,
      "message": "PDF generated successfully",
      "path": PDFpath,
    });


  }));

router.post("/merge", asyncHandler(async (req, res) => {
    const requestBody = req.body;
    const fileName = generateUniqueFilename();
    let outputFilePath = `/home/app/docs/${fileName}.pdf`;
    console.log(process.env.NODE_ENV);
    const NODE_ENV = process.env.NODE_ENV || 'local';
    console.log("NODE_ENV: ", NODE_ENV);
    console.log("Output File Path: ", outputFilePath);
    if(NODE_ENV === 'local') {
      outputFilePath = `docs/${fileName}.pdf`;
    }
    console.log("Output File Path: ", outputFilePath);
    const resp = await mergeAndSavePDFs(requestBody.docURLs, outputFilePath)
    res.status(200).json({
      error: false,
      message: "PDFs merged successfully",
      data: resp,
    });
    console.log("PDFs merged successfully.");
  }));

module.exports = router;
