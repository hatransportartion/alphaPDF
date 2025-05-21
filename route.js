const express = require("express");
const router = express.Router();
const path = require('path');

const { validateGenerateRequestBody } = require("./utility/validate");
const { generatePDF } = require("./utility/generate");

const dotenv = require("dotenv").config();
const asyncHandler = require('express-async-handler');

const { mergeAndSavePDFs } = require("./utility/pdfmerging");
const { isValidURL } = require("./utility/service");
const { findTemplateById, addTemplate } = require("./prisma/db");

router.post("/generate", asyncHandler( async (req, res) => {
    
    const requestBody = req.body;
    if (!requestBody) {
      return res.status(400).json({ error: true, message: "Request body is required" });
    }

    const { recordID, templateID, data } = requestBody;
    console.log("Record ID: ", recordID);
    console.log("Template ID: ", templateID);
    console.log("Data: ", data);

    const template = await findTemplateById(templateID);
    console.log("Template: ", template);
    if (!template) {
      return res.status(404).json({ error: true, message: "Template ID not found in database" });
    }
  
    const { error, message } = await validateGenerateRequestBody(requestBody);
    if (error) {
      return res.status(400).json({ error: true, message });
    }

    
  

    const resp = await generatePDF(template, data);
    console.log("Response: ", resp);

    res.status(200).json({ error: false, message: "Request body is valid" });

    // const PDFpath = path.join(__dirname, 'PDFs', `${recordID}.pdf`);
    // console.log("PDF Path: ", PDFpath);

    // res.status(200).json({
    //   "error": false,
    //   "message": "PDF generated successfully",
    //   "path": PDFpath,
    // });


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

router.get("/template/add", asyncHandler(async (req, res) => {
    // const requestBody = req.body;
    // const { templateName, templateID, content } = requestBody;

    // // Validate the request body
    // if (!templateName || !templateID || !content) {
    //   return res.status(400).json({ error: true, message: "All fields are required" });
    // }

    const templateName = "RateCon";
    const templateID = "6e551c6309b54ae79f7f0ac5af62f0ee";
    const content = require('fs').readFileSync('./views/ratecon.hbs', 'utf8');

    // Add the template to the database
    const newTemplate = await addTemplate(templateName, templateID, content);
    const attachemnt = await db.attachment.create({
      data: {
        templateId: templateID,
        type: 'logo',
        fileName: 'logo.png',
        fileType: 'image/png',
        storageType: 'BASE64',
        fileData: logoBase64,
      },
    });
    
    if (!newTemplate || !attachemnt) {
      if (newTemplate) {
        await db.PDFTemplate.delete({ where: { templateId: templateID } });
      }
      return res.status(500).json({ error: true, message: "Failed to add template" });
    }
    res.status(201).json({
      error: false,
      message: "Template added successfully",
      data: newTemplate,
    });
  }));
  
module.exports = router;
