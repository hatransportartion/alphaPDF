const express = require("express");
const router = express.Router();
const path = require('path');

const { validateRequestBody } = require("./utility/validate");
const { generatePDF } = require("./generate");

const dotenv = require("dotenv").config();
const asyncHandler = require('express-async-handler');

const { mergeAndSavePDFs } = require("./utility/pdfmerging");

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

    const fileName = generateUniqueFilename();
    const resp = await generatePDF(fileName, data);
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
    const resp = await mergeAndSavePDFs(requestBody.docURLs)
    res.status(200).json({
      error: false,
      message: "PDFs merged successfully",
      data: resp,
    });
    console.log("PDFs merged successfully.");
  }));

module.exports = router;
