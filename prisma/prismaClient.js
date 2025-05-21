// prismaClient.js
// const { PrismaClient } = require('@prisma/client');
const { PrismaClient } = require('../generated/prisma'); // ✅ Adjust the path as needed
const prisma = new PrismaClient();
module.exports = prisma;
