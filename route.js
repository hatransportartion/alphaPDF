const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const { validateGenerateRequestBody } = require("./utility/validate");
const { generatePDF } = require("./utility/generate");

const dotenv = require("dotenv").config();
const asyncHandler = require("express-async-handler");

const { mergeAndSavePDFs } = require("./utility/pdfmerging");
const { isValidURL, generateUniqueFilename } = require("./utility/service");
const templateRegistry = require("./utility/templateRegistry");
const {
  findTemplateById,
  addTemplate,
  addAttachment,
  templateWithAttachments,
  deleteTemplate,
  uploadInventory,
} = require("./prisma/db");

// Loads a template + logo from disk (no DB), shaped like the DB result so it
// can be passed straight into generatePDF.
function loadTemplateFromDisk(hbsFile, logoFile) {
  const hbsPath = path.join(__dirname, "views", hbsFile);
  if (!fs.existsSync(hbsPath)) {
    throw new Error(`Template file not found: ${hbsFile}`);
  }
  const content = fs.readFileSync(hbsPath, "utf8");
  const attachments = [];
  if (logoFile) {
    const logoPath = path.join(__dirname, "logo", logoFile);
    if (!fs.existsSync(logoPath)) {
      throw new Error(`Logo file not found: ${logoFile}`);
    }
    attachments.push({ fileData: fs.readFileSync(logoPath, "base64") });
  }
  return { content, attachments };
}
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

    const { recordID, templateID, hbsFile, logo, data } = requestBody;

    let templateWithAttachment;

    try {
      if (hbsFile) {
        // (a) Direct mode: caller specifies the .hbs and logo directly.
        templateWithAttachment = loadTemplateFromDisk(hbsFile, logo);
      } else if (templateID && templateRegistry[templateID]) {
        // (b) Registry mode: known templateID → resolve to a file off disk.
        const entry = templateRegistry[templateID];
        templateWithAttachment = loadTemplateFromDisk(entry.hbs, entry.logo);
      } else if (templateID) {
        // (c) DB fallback: unknown templateID, look it up the old way.
        const { error, message } = await validateGenerateRequestBody(requestBody);
        if (error) {
          return res.status(400).json({ error: true, message });
        }
        templateWithAttachment = await templateWithAttachments(templateID);
        if (!templateWithAttachment) {
          return res
            .status(404)
            .json({ error: true, message: "Template not found" });
        }
      } else {
        return res.status(400).json({
          error: true,
          message: "Either templateID or hbsFile is required",
        });
      }
    } catch (err) {
      return res.status(404).json({ error: true, message: err.message });
    }

    const resp = await generatePDF(templateWithAttachment, data);
    console.log("Response: ", resp);

    res.status(200).json({
      error: false,
      message: "PDF generated successfully",
      path: resp.path,
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

router.post(
  "/template",
  asyncHandler(async (req, res) => {
    const { templateName, templateID, hbsFileName, logo } = req.body;

    if (!templateName || !templateID || !hbsFileName || !logo) {
      return res.status(400).json({
        error: true,
        message: "templateName, templateID, hbsFileName and logo are required",
      });
    }

    const content = require("fs").readFileSync(`./views/${hbsFileName}`, "utf8");

    const logoPath = path.join(__dirname, `./logo/${logo}`);
    const logoBase64 = require("fs").readFileSync(logoPath, "base64");

    const newTemplate = await addTemplate(templateName, templateID, content);
    const attachment = await addAttachment(templateID, logoBase64);

    res.status(201).json({
      error: false,
      message: "Template created successfully",
      data: newTemplate,
    });
  })
);``

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
    // const templateName = "Chandi Logistics";
    // const fileName = generateUniqueFilename();
    // const templateID = "cf6fde884a6d44608fe78db22640e69c";
    // const content = require("fs").readFileSync(
    //   "./views/payrollChandiLogistics.hbs",
    //   "utf8"
    // );
    // const logoPath = path.join(__dirname, "./logo/ChandiLogistics_Logo1.png");
    // const logoBase64 = require("fs").readFileSync(logoPath, "base64");

    //Apex Lion Truck and Trialer 
    // const templateName = "Apex Lion Truck and Trailer";
    // const fileName = generateUniqueFilename();
    // const templateID = "hughje884a6d44608fe78db22640e69c";
    // const content = require("fs").readFileSync(
    //   "./views/repairInvoice.hbs",
    //   "utf8"
    // );
    // const logoPath = path.join(__dirname, "./logo/ApexRepair.png");
    // const logoBase64 = require("fs").readFileSync(logoPath, "base64");

    // // // Add the template to the database
    // const deleteTemplateD = await deleteTemplate(templateID);
    // const newTemplate = await addTemplate(templateName, templateID, content);
    // const attachemnt = await addAttachment(templateID, logoBase64);

    // if (!newTemplate || !attachemnt) {
    //   if (newTemplate) {
    //     await db.PDFTemplate.delete({ where: { templateId: templateID } });
    //   }
    //   return res
    //     .status(500)
    //     .json({ error: true, message: "Failed to add template" });
    // }

    const templateName = "Compnay Truck Payroll";
    const fileName = generateUniqueFilename();
    const templateID = "5c3494c22039433785f1e7a9d7cf4664";
    const content = require("fs").readFileSync(
      "./views/companyPayroll.hbs",
      "utf8"
    );
    const logoPath = path.join(__dirname, "./logo/HAlogo.png");
    const logoBase64 = require("fs").readFileSync(logoPath, "base64");

    // // Add the template to the database
    const deleteTemplateD = await deleteTemplate(templateID);
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

router.put(
  "/template/:templateID",
  asyncHandler(async (req, res) => {
    const { templateID } = req.params;
    const { templateName, hbsFileName, logo } = req.body;

    const content = require("fs").readFileSync(`./views/${hbsFileName}`, "utf8");

    const logoPath = path.join(__dirname, `./logo/${logo}`);
    const logoBase64 = require("fs").readFileSync(logoPath, "base64");

    await deleteTemplate(templateID);

    const newTemplate = await addTemplate(templateName, templateID, content);
    await addAttachment(templateID, logoBase64);

    res.json({
      error: false,
      message: "Template updated successfully",
      data: newTemplate,
    });
  })
);

// router.post('/template/add', asyncHandler(async (req,res) => {
//   const requestBody = req.body;
//   const {templateName, templateID, hbsFileName, logo} = requestBody;
//     const fileName = generateUniqueFilename();
//     console.log("Request fileName: ", fileName);
//     const content = require("fs").readFileSync(
//       `./views/${hbsFileName}`,
//       "utf8"
//     );
//     const logoPath = path.join(__dirname, `./logo/${logo}`);
//     const logoBase64 = require("fs").readFileSync(logoPath, "base64");

//     // // // Add the template to the database
//     // const deleteTemplateD = await deleteTemplate(templateID);
//     // const newTemplate = await addTemplate(templateName, templateID, content);
//     // const attachemnt = await addAttachment(templateID, logoBase64);

//     // if (!newTemplate || !attachemnt) {
//     //   if (newTemplate) {
//     //     await db.PDFTemplate.delete({ where: { templateId: templateID } });
//     //   }
//     //   return res
//     //     .status(500)
//     //     .json({ error: true, message: "Failed to add template" });
//     // }
//     // res.status(201).json({
//     //   error: false,
//     //   message: "Template added successfully",
//     //   data: newTemplate,
//     // });

// }))

router.post('/logo/add', asyncHandler(async (req,res) => {
  console.log("Hello");
  c
  res.status(200).json({
    error:false,
    message:"Logo Added",
    data:"hh"
  })
}));


router.post(
  "/upload-inventory",
  asyncHandler(async (req, res) => {
    const records = req.body;

    if (!Array.isArray(records) || records.length === 0) {
      return res.status(400).json({ success: false, message: "No inventory records provided" });
    }

    try {
      await uploadInventory(records); // call your existing Prisma function
      res.json({ success: true, message: `${records.length} inventory records uploaded` });
    } catch (error) {
      console.error("Error uploading inventory:", error);
      res.status(500).json({ success: false, message: "Failed to upload inventory", error });
    }
  })
);

module.exports = router;
