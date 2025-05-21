// const {PrismaClient} = require('@prisma/client');
// const prisma = new PrismaClient();
const { v4 } = require('uuid');
const uuidv4 = require("uuid").v4;

const generateTemplateId = () => {
    // Generate a unique template ID
    const templateID =  v4();
    //remove the dashes from the UUID
    const templateIDWithoutDashes = templateID.replace(/-/g, '');
    return templateIDWithoutDashes;
}

console.log(generateTemplateId());


// async function main() {
//   const newTemplate = await prisma.PDFTemplate.create({
//     data: {
//       templateName: 'ratecon',
//       templateId: generateTemplateId(), 
//     },
//   });

//   console.log('Inserted Template:', newTemplate);
// }

// main()
//   .catch((e) => {
//     console.error(e);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// const html = require('fs').readFileSync('./views/ratecon.hbs', 'utf8');

//   INSERT INTO PDFTemplate (templateName, templateId, content) VALUES ('RateCon', '6e551c6309b54ae79f7f0ac5af62f0ee', html);
