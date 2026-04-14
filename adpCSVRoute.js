const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv").config();
const asyncHandler = require("express-async-handler");

router.post('/create', asyncHandler(async (req, res) => {
    try {
        const { headers, rows, recordID } = req.body;

        // --- Build CSV content ---
        const escapeCSV = (val) => {
            const str = String(val ?? '');
            return `"${str.replace(/"/g, '""')}"`;
        };

        const csvLines = [
            headers.map(escapeCSV).join(','),
            ...rows.map(row => {
                if (Array.isArray(row)) {
                    return row.map(escapeCSV).join(',');
                }
                return headers.map(h => escapeCSV(row[h] || '')).join(',');
            })
        ];
        const csvContent = csvLines.join('\n');

        // --- Save CSV file ---
        const fileName = `output_${recordID || 'noID'}_${uuidv4()}.csv`;
        let outputFilePath = `/home/app/docs/${fileName}`;

        if (process.env.NODE_ENV === 'local') {
            outputFilePath = `PDFs/${fileName}`;
        }

        fs.writeFileSync(outputFilePath, csvContent, 'utf8');
        console.log("CSV saved at:", outputFilePath);

        return res.json({
            success: true,
            file: outputFilePath,
            fileName
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error creating CSV file",
            error: error.message
        });
    }
}));

module.exports = router;