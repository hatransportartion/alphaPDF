const express = require("express");
const router = express.Router();
const path = require('path');

const { validateRequestBody } = require("./utility");
const { generatePDF } = require("./generate");

router.post("/get", async (req, res) => {
    console.log(" /get Route: ");
    const requestBody = req.body;
    if (!requestBody) {
      return res.status(400).json({ error: true, message: "Request body is required" });
    }
  
    const { error, message } = await validateRequestBody(requestBody);
    if (error) {
      return res.status(400).json({ error: true, message });
    }
  
    const { templateID, data } = requestBody;
    console.log("Template ID: ", templateID);
    console.log("Data: ", data);

    const resp = await generatePDF(templateID, data);
    console.log("Response: ", resp);

    const PDFpath = path.join(__dirname, 'PDFs', `${templateID}.pdf`);
    console.log("PDF Path: ", PDFpath);

    res.status(200).json({
      "error": false,
      "message": "PDF generated successfully",
      "path": PDFpath,
    });
  
    // // Check if the template file exists in views directory
    // const fs = require("fs");
    // const templatePath = path.join(__dirname, 'views', `${templateID}.hbs`);
    // if (!fs.existsSync(templatePath)) {
    //   return res.status(404).json({ error: true, message: "Template not found" });
    // }else{
    //     console.log("Template found: ", templatePath);
    // }
  
    // // ✅ RENDER using view engine (no extension or path!)
    // res.render(templateID, {data}, (err, html) => {
    //   if (err) {
    //     console.error("Error rendering template: ", err);
    //     return res.status(500).json({ error: true, message: "Error rendering template" });
    //   }
    //   //return view
    //   res.send(html);
    // });


  });

module.exports = router;
