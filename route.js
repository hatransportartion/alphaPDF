const express = require("express");
const router = express.Router();
const path = require('path');

const { validateRequestBody } = require("./utility");
const { generatePDF } = require("./generate");

router.post("/generate", async (req, res) => {
    console.log(" /get Route: ");
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


  });

module.exports = router;
