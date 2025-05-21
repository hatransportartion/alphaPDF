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

module.exports = {
  findTemplateById,
  addTemplate
};
