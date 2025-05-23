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

module.exports = {
  findTemplateById,
  addTemplate,
  addAttachment,
  templateWithAttachments
};
