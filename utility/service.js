const { getRecordById } = require("./at");
const path = require("path");
const uuidv4 = require("uuid").v4;

//Check if the value is empty, undefined or null
function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "")
  );
}

//
function validateRequestBody(body) {
  console.log("Validating request body -->>", body);
  const requiredFields = [
    "baseID",
    "tableID",
    "recordID",
    "fields",
    "mergedField",
  ];

  for (let field of requiredFields) {
    if (!body.hasOwnProperty(field)) {
      return { valid: false, error: `Missing required field: ${field}` };
    }

    if (field !== "fields" && isEmpty(body[field])) {
      return { valid: false, error: `'${field}' cannot be empty` };
    }
  }

  if (!Array.isArray(body.fields)) {
    return { valid: false, error: `'fields' must be an array` };
  }

  if (body.fields.length < 2) {
    return { valid: false, error: `'fields' must have at least 2 items` };
  }

  for (let i = 0; i < body.fields.length; i++) {
    if (isEmpty(body.fields[i])) {
      return { valid: false, error: `'fields[${i}]' cannot be empty` };
    }
  }

  return { valid: true };
}

async function getAllAttahcmentURL(requestBody) {
  console.log("Get All Attachment -> ", requestBody);
  const { baseID, tableID, fields, mergedField, recordID } = requestBody;
  let pathURLs = [];
  try {
    const record = await getRecordById(baseID, tableID, recordID);
    console.log("Record:", record);
    pathURLs = [...record.fields["BOL"], ...record.fields["POD"]];
    return { data: pathURLs, error: null };
  } catch (error) {
    console.error("Error merging PDFs:", error);
    return { error: "Error merging PDFs" };
  }
}

function generateUniqueFilename() {
  const uniqueId = uuidv4();  // Generate unique UUID
  return `${uniqueId}`;  // Combine UUID with the file extension
}

async function isValidURL(url) {
  try {
    const urlObj = new URL(url);
    const allowedProtocols = ["https:"];
    const isValidProtocol = allowedProtocols.includes(urlObj.protocol);
    const isValidDomain = urlObj.hostname.endsWith("airtableusercontent.com");

    return isValidProtocol && isValidDomain;

  } catch (error) {
    return false;
  }
}

module.exports = {
  validateRequestBody,
  getAllAttahcmentURL,
  generateUniqueFilename,
  isValidURL
};
