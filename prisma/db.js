//import prisma Client
const prisma = require('./prismaClient');


/**
 * Check if a PDF template exists by templateId
 * @param {string} templateId 
 * @returns {Promise<PDFTemplate|null>}
 */
async function findTemplateById(templateId) {
  return await prisma.pDFTemplate.findUnique({
    where: {
      templateId: templateId,
    },
  });
}

async function templateWithAttachments(templateId) {
  
  const templateWithAttachments = await prisma.pDFTemplate.findUnique({
    where: {
      templateId: templateId,
    },
    include: {
      attachments: true, // Prisma auto-links this if you defined relation
    },
  });
  
  console.log(templateWithAttachments);
  return templateWithAttachments;
}

//function to add a new template to the database
async function addTemplate(templateName, templateId, content) {
  return await prisma.pDFTemplate.create({
    data: {
      templateName: templateName,
      templateId: templateId,
      content: content,
    },
  });
}

//function to delete template
async function deleteTemplate(templateId) {
  try {
    // Check if template exists
    const existing = await prisma.pDFTemplate.findUnique({
      where: { templateId },
    });

    if (!existing) {
      return { success: false, message: "Template not found" };
    }

    // Delete attachments (if no cascade rule)
    await prisma.attachment.deleteMany({
      where: { templateId },
    });

    // Delete template
    await prisma.pDFTemplate.delete({
      where: { templateId },
    });

    return { success: true, message: "Template deleted successfully" };
  } catch (error) {
    console.error(`Error deleting template ${templateId}:`, error);
    throw error;
  }
}



async function addAttachment(templateId, fileData) {
  return await prisma.attachment.create({
    data: {
      templateId: templateId,
      type: 'logo',
      fileName: 'logo.png',
      fileData: fileData,
      storageType: 'BASE64',
    },
  });
}


/**
 * Upload inventory records to InventoryUpload table
 * @param {Array} records - Array of inventory objects
 *   Each object should have: { inventoryId, airtableId, itemName, quantity, snapshotDate(optional) }
 * @returns {Promise<void>}
 */
async function uploadInventory(records) {
  if (!records || !records.length) {
    console.log("No records to upload.");
    return;
  }

  // Add snapshotDate if missing
  const today = new Date();
  const data = records.map(r => ({
    inventoryId: r.inventoryId,
    airtableId: r.airtableId,
    itemName: r.itemName,
    quantity: r.quantity || 0,
    snapshotDate: r.snapshotDate || today,
  }));

  try {
    await prisma.inventoryUpload.createMany({
      data,
      skipDuplicates: true, // optional, prevents duplicates for same inventoryId + snapshotDate
    });

    console.log(`✅ Uploaded ${data.length} inventory records`);
  } catch (error) {
    console.error("Error uploading inventory:", error);
    throw error;
  }
}


module.exports = {
  findTemplateById,
  addTemplate,
  addAttachment,
  templateWithAttachments,
  deleteTemplate,
  uploadInventory
};
