// utils/prismaClientFactory.js
const { PrismaClient } = require('@prisma/client');

function createPrismaClient(catalog) {
  const baseUrl = process.env.DATABASE_URL; // in .env, without catalog
  const fullUrl = `${baseUrl};initial catalog=${catalog || "DCC.CRMS"}`;
  console.log("jjjjjjjjj : ",fullUrl)
  return new PrismaClient({
    datasources: {
      db: {
        url: fullUrl,
      },
    },
  });
}

module.exports = createPrismaClient;
