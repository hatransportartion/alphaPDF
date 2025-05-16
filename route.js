const express = require("express");
const router = express.Router();
const path = require('path');

const { validateGenerateRequestBody } = require("./utility/validate");
const { generatePDF } = require("./utility/generate");

const dotenv = require("dotenv").config();
const asyncHandler = require('express-async-handler');

const { mergeAndSavePDFs } = require("./utility/pdfmerging");
const { isValidURL } = require("./utility/service");

router.post("/generate", asyncHandler( async (req, res) => {
    
    const requestBody = req.body;
    if (!requestBody) {
      return res.status(400).json({ error: true, message: "Request body is required" });
    }
  
    const { error, message } = await validateGenerateRequestBody(requestBody);
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
    const docURLs = requestBody.docURLs;

    // Validate and sanitize the URLs
    if (!Array.isArray(docURLs)) {
      return res.status(400).json({ error: true, message: "docURLs must be an array" });
    }

    const validURLs = docURLs.filter(url => isValidURL(url));
    if (validURLs.length === 0) {
      return res.status(400).json({ error: true, message: "No valid or trusted URLs provided" });
    }

    //Merge and save PDFs
    const resp = await mergeAndSavePDFs(validURLs);
    res.status(200).json({
      error: false,
      message: "PDFs merged successfully",
      data: resp,
    });
    console.log("PDFs merged successfully.");
  }));

module.exports = router;
