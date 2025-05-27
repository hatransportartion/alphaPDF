const fs = require("fs");
const { PDFDocument } = require("pdf-lib");
const { generateUniqueFilename } = require("../utility/service");

async function mergePDFs(pdfPaths, outputPath) {
  console.log("MergePDFs --->> ", pdfPaths);
  console.log("Array Length: ", pdfPaths.length);
  if (pdfPaths.length === 0) {
    throw new Error("No PDF paths provided");
  }
  const pdfDoc = await PDFDocument.create();

  for (const pdfPath of pdfPaths) {
    // const URL = pdfPath.url.replace("http://", "https://");
    const imageBytes = await fetch(pdfPath.url, {
      method: "GET",
    })
      .then((res) => res.arrayBuffer())
      .catch((err) => {
        console.error("Error fetching PDF:", err);
        throw new Error("Error fetching PDF");
      });
    console.log(imageBytes);

    if (pdfPath.type === "application/pdf" || pdfPath.type === "image/pdf") {
      const pdfDocToMerge = await PDFDocument.load(imageBytes, {
        ignoreEncryption: true,
      });
      const copiedPages = await pdfDoc.copyPages(
        pdfDocToMerge,
        pdfDocToMerge.getPageIndices()
      );
      copiedPages.forEach((page) => {
        pdfDoc.addPage(page);
      });
    } else if (pdfPath.type === "image/jpeg" || pdfPath.type === "image/jpg") {
      const jpgImageBytes = await pdfDoc.embedJpg(imageBytes);
      const jpgDims = jpgImageBytes.scale(0.5);
      const page = pdfDoc.addPage([jpgDims.width, jpgDims.height]);
      page.drawImage(jpgImageBytes, {
        x: 0,
        y: 0,
        width: jpgDims.width,
        height: jpgDims.height,
      });
    } else if (pdfPath.type === "image/png") {
      const pngImage = await pdfDoc.embedPng(imageBytes);
      const pngDims = pngImage.scale(0.5);
      const page = pdfDoc.addPage([pngDims.width, pngDims.height]);
      page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width: pngDims.width,
        height: pngDims.height,
      });
    } else {
      console.error("Unsupported file type:", pdfPath.filetype, " & ", pdfPath);
      continue;
    }

    const pdfBytes = await pdfDoc.save();
  }

  const mergedPdfBytes = await pdfDoc.save();

  return mergedPdfBytes;
}

async function mergeAndSavePDFs(pdfPaths) {
  try {
    console.log("Merging and saving PDFs -->> ");
    const fileName = generateUniqueFilename();
    let outputFilePath = `/home/app/docs/${fileName}.pdf`;
    const NODE_ENV = process.env.NODE_ENV || "local";
    console.log("NODE_ENV: ", NODE_ENV);
    console.log("Output File Path: ", outputFilePath);
    if (NODE_ENV === "local") {
      outputFilePath = `PDFs/${fileName}.pdf`;
    }
    console.log("Output File Path: ", outputFilePath);
    const mergedPdfBytes = await mergePDFs(pdfPaths, outputFilePath);
    fs.writeFileSync(outputFilePath, mergedPdfBytes);
    console.log(
      "PDFs merged successfully. Merged file saved at:",
      outputFilePath
    );
    return fileName;
  } catch (error) {
    console.error("Error merging PDFs:", error);
    throw error;
  }
}

module.exports = {
  mergeAndSavePDFs,
};
