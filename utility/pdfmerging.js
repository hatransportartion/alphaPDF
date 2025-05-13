const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

async function mergePDFs(pdfPaths, outputPath) {
  console.log("MergePDFs --->> ", pdfPaths);
  console.log("Array Length: ", pdfPaths.length);
  if (pdfPaths.length === 0) {
    throw new Error("No PDF paths provided");
  }
  const pdfDoc = await PDFDocument.create();

  for (const pdfPath of pdfPaths) {
    const URL = pdfPath.url.replace("http://", "https://");
    const imageBytes = await fetch(URL, {
      method: "GET",
    }).then((res) => res.arrayBuffer()).catch((err) => {
      console.error("Error fetching PDF:", err);
      throw new Error("Error fetching PDF");
    }
    );
    console.log(imageBytes);

    if (
      pdfPath.type === "application/pdf" ||
      pdfPath.type === "image/pdf"
    ) {
      
      const pdfDocToMerge = await PDFDocument.load(imageBytes);
      const copiedPages = await pdfDoc.copyPages(
        pdfDocToMerge,
        pdfDocToMerge.getPageIndices()
      );
      copiedPages.forEach((page) => {
        pdfDoc.addPage(page);
      });
    } else if (
      pdfPath.type === "image/jpeg" ||
      pdfPath.type === "image/jpg"
    ) {
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

  fs.writeFileSync(outputPath, mergedPdfBytes);

  return outputPath;
}

async function mergeAndSavePDFs(pdfPaths, outputPath) {
  try {
    console.log("Merging and saving PDFs -->> ", outputPath);
    const mergedFileName = await mergePDFs(pdfPaths, outputPath);
    console.log(
      "PDFs merged successfully. Merged file saved at:",
      mergedFileName
    );
    return mergedFileName;
  } catch (error) {
    console.error("Error merging PDFs:", error);
    throw error;
  }
}

module.exports = {
  mergeAndSavePDFs,
};
