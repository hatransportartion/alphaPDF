const express = require("express");
const router = express.Router();
const path = require("path");

const { validateGenerateRequestBody } = require("./utility/validate");
const { generatePDF } = require("./utility/generate");

const dotenv = require("dotenv").config();
const asyncHandler = require("express-async-handler");

const { mergeAndSavePDFs } = require("./utility/pdfmerging");
const { isValidURL, generateUniqueFilename } = require("./utility/service");
const {
  findTemplateById,
  addTemplate,
  addAttachment,
  templateWithAttachments,
} = require("./prisma/db");
const { error } = require("console");

router.post(
  "/generate",
  asyncHandler(async (req, res) => {
    const requestBody = req.body;
    if (!requestBody) {
      return res
        .status(400)
        .json({ error: true, message: "Request body is required" });
    }

    const { error, message } = await validateGenerateRequestBody(requestBody);
    if (error) {
      return res.status(400).json({ error: true, message });
    }

    const { recordID, templateID, data } = requestBody;

    const templateWithAttachment = await templateWithAttachments(templateID);

    if (!templateWithAttachment) {
      return res
        .status(404)
        .json({ error: true, message: "Template not found" });
    }

    const resp = await generatePDF(templateWithAttachment, data);
    console.log("Response: ", resp);

    res.status(200).json({
      error: false,
      message: "PDF generated successfully",
      path: res.path,
      fileName: resp.fileName,
    });
  })
);

router.post(
  "/merge",
  asyncHandler(async (req, res) => {
    const requestBody = req.body;
    const docURLs = requestBody.docURLs;

    // Validate and sanitize the URLs
    if (!Array.isArray(docURLs)) {
      return res
        .status(400)
        .json({ error: true, message: "docURLs must be an array" });
    }

    const validURLs = docURLs.filter((url) => isValidURL(url));
    if (validURLs.length === 0) {
      return res
        .status(400)
        .json({ error: true, message: "No valid or trusted URLs provided" });
    }

    //Merge and save PDFs
    const resp = await mergeAndSavePDFs(validURLs);
    res.status(200).json({
      error: false,
      message: "PDFs merged successfully",
      data: resp,
    });
    console.log("PDFs merged successfully.");
  })
);

router.get(
  "/template/add",
  asyncHandler(async (req, res) => {
    // const templateName = "RateCon";
    // const templateID = "6e551c6309b54ae79f7f0ac5af62f0ee";
    // const content = require('fs').readFileSync('./views/ratecon.hbs', 'utf8');
    // // const logoPath = path.resolve(__dirname, '../logo/HAlogo.png');
    // const logoPath = path.join(__dirname, './logo/HAlogo.png');
    // const logoBase64 = require('fs').readFileSync(logoPath, 'base64');

    // // Add the template to the database
    // const newTemplate = await addTemplate(templateName, templateID, content);
    // const attachemnt = await addAttachment(templateID, logoBase64);

    // if (!newTemplate || !attachemnt) {
    //   if (newTemplate) {
    //     await db.PDFTemplate.delete({ where: { templateId: templateID } });
    //   }
    //   return res.status(500).json({ error: true, message: "Failed to add template" });
    // }
    // res.status(201).json({
    //   error: false,
    //   message: "Template added successfully",
    //   data: newTemplate,
    // });

    //Sarbloh
    // const templateName = "Payroll Sarbloh";
    // const fileName = generateUniqueFilename();
    // const templateID = "31ef472e8da7454c88e62a433907f275";
    // const content = require("fs").readFileSync(
    //   "./views/payrollSarbloh.hbs",
    //   "utf8"
    // );
    // const logoPath = path.join(__dirname, "./logo/Sarbloh_Logo1.png");
    // const logoBase64 = require("fs").readFileSync(logoPath, "base64");

    //HA
    // const templateName = "Payroll HA";
    // const fileName = generateUniqueFilename();
    // const templateID = "240ea7b35a094098a93d320ecbffcc95";
    // const content = require("fs").readFileSync(
    //   "./views/payroll.hbs",
    //   "utf8"
    // );
    // const logoPath = path.join(__dirname, "./logo/HAlogo.png");
    // const logoBase64 = require("fs").readFileSync(logoPath, "base64");

    //313 Transport
    // const templateName = "Payroll 313 Transport";
    // const fileName = generateUniqueFilename();
    // const templateID = "65a7aded06524362a33daf702ae98c21";
    // const content = require("fs").readFileSync(
    //   "./views/payroll313Transport.hbs",
    //   "utf8"
    // );
    // const logoPath = path.join(__dirname, "./logo/313_logo1.png");
    // const logoBase64 = require("fs").readFileSync(logoPath, "base64");

    //Chandi Logistics
    const templateName = "Chandi Logistics";
    const fileName = generateUniqueFilename();
    const templateID = "cf6fde884a6d44608fe78db22640e69c";
    const content = require("fs").readFileSync(
      "./views/payrollChandiLogistics.hbs",
      "utf8"
    );
    const logoPath = path.join(__dirname, "./logo/ChandiLogistics_Logo1.png");
    const logoBase64 = require("fs").readFileSync(logoPath, "base64");

    // // Add the template to the database
    const newTemplate = await addTemplate(templateName, templateID, content);
    const attachemnt = await addAttachment(templateID, logoBase64);

    if (!newTemplate || !attachemnt) {
      if (newTemplate) {
        await db.PDFTemplate.delete({ where: { templateId: templateID } });
      }
      return res
        .status(500)
        .json({ error: true, message: "Failed to add template" });
    }
    res.status(201).json({
      error: false,
      message: "Template added successfully",
      data: newTemplate,
    });
  })
);

router.post('/logo/add', asyncHandler(async (req,res) => {
  console.log("Hello");
  c
  res.status(200).json({
    error:false,
    message:"Logo Added",
    data:"hh"
  })
}));

module.exports = router;
