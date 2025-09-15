const express = require("express");
const router = express.Router();
const path = require("path");
const ExcelJS = require("exceljs");

const dotenv = require("dotenv").config();
const asyncHandler = require("express-async-handler");

router.post('/create', asyncHandler(async (req, res) => {
    try {
    const { headers, rows, recordID } = req.body;

    // Create new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    // Add headers
    worksheet.addRow(headers);

    // Add rows (array of objects or arrays)
    rows.forEach(row => {
      if (Array.isArray(row)) {
        // Case: row is an array
        worksheet.addRow(row);
      } else {
        // Case: row is an object → map headers order
        worksheet.addRow(headers.map(h => row[h] || ""));
      }
    });

    // Auto width for columns
    worksheet.columns.forEach(col => {
      let maxLength = 10;
      col.eachCell({ includeEmpty: true }, cell => {
        maxLength = Math.max(maxLength, cell.value ? cell.value.toString().length : 0);
      });
      col.width = maxLength + 2;
    });

    // Save Excel file in PDFs folder
    const fileName = `output_${recordID || Date.now()}.xlsx`;
    let outputFilePath = `/home/app/docs/${fileName}`;

    if (process.env.NODE_ENV === 'local') {
    outputFilePath = `PDFs/${fileName}`;
    }

    await workbook.xlsx.writeFile(outputFilePath);

    console.log("Excel saved at:", outputFilePath);

    // ✅ Only respond once
    return res.json({
      success: true,
      file: outputFilePath,
      fileName
    });

  } catch (error) {
    console.error(error);
    
    // ✅ Only respond once on error
    return res.status(500).json({
      success: false,
      message: "Error creating Excel file",
      error: error.message
    });
  }
}));

module.exports = router;

