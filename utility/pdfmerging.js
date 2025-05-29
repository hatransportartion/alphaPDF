const fs = require("fs");
const { PDFDocument } = require("pdf-lib");
const { generateUniqueFilename } = require("./service");

async function mergePDFs(pdfPaths, outputPath) {
  console.log("MergePDFs --->> ", pdfPaths);
  if (pdfPaths.length === 0) throw new Error("No PDF paths provided");

  const pdfDoc = await PDFDocument.create();

  for (const pdfPath of pdfPaths) {
    const fileUrl = pdfPath.url;
    const fileType = pdfPath.type;

    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        console.warn(
          `Failed to fetch file from URL: ${fileUrl} (HTTP ${response.status})`
        );
        continue;
      }

      const imageBytes = await response.arrayBuffer();

      if (fileType === "application/pdf" || fileType === "image/pdf") {
        try {
          const pdfDocToMerge = await PDFDocument.load(imageBytes, {
            ignoreEncryption: true,
          });

          const indices = pdfDocToMerge.getPageIndices();
          if (!indices || indices.length === 0) {
            console.warn(`PDF has no pages: ${fileUrl}`);
            continue;
          }

          const copiedPages = await pdfDoc.copyPages(pdfDocToMerge, indices);
          copiedPages.forEach((page) => pdfDoc.addPage(page));
        } catch (err) {
          console.error(`Error loading PDF from ${fileUrl}`);
          console.error("→", err.message);
          continue;
        }
      } else if (fileType === "image/jpeg" || fileType === "image/jpg") {
        try {
          const jpgImageBytes = await pdfDoc.embedJpg(imageBytes);
          const jpgDims = jpgImageBytes.scale(0.5);
          const page = pdfDoc.addPage([jpgDims.width, jpgDims.height]);
          page.drawImage(jpgImageBytes, {
            x: 0,
            y: 0,
            width: jpgDims.width,
            height: jpgDims.height,
          });
        } catch (err) {
          console.error(`Error embedding JPEG image from ${fileUrl}`);
          console.error("→", err.message);
          continue;
        }
      } else if (fileType === "image/png") {
        try {
          const pngImage = await pdfDoc.embedPng(imageBytes);
          const pngDims = pngImage.scale(0.5);
          const page = pdfDoc.addPage([pngDims.width, pngDims.height]);
          page.drawImage(pngImage, {
            x: 0,
            y: 0,
            width: pngDims.width,
            height: pngDims.height,
          });
        } catch (err) {
          console.error(`Error embedding PNG image from ${fileUrl}`);
          console.error("→", err.message);
          continue;
        }
      } else {
        console.warn(`Unsupported file type (${fileType}) for URL: ${fileUrl}`);
        continue;
      }
    } catch (err) {
      console.error(`Unexpected error processing file at ${fileUrl}`);
      console.error("→", err.message);
      continue;
    }
  }

  return await pdfDoc.save();
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
  mergePDFs,
  mergeAndSavePDFs
}