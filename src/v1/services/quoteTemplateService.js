const quoteTemplateModel = require("../models/quoteTemplateModel");

const createQuoteTemplate = async (data) => {
  return await quoteTemplateModel.createQuoteTemplate(data);
};

const findQuoteTemplateById = async (id) => {
  return await quoteTemplateModel.findQuoteTemplateById(id);
};

const updateQuoteTemplate = async (id,data) => {
  return await quoteTemplateModel.updateQuoteTemplate(id,data);
};

const deleteQuoteTemplate = async (id) => {
  return await quoteTemplateModel.deleteQuoteTemplate(id);
};
const getAllQuoteTemplate = async (search, page, size, startDate, endDate) => {
  return await quoteTemplateModel.getAllQuoteTemplate(search, page, size, startDate, endDate);
};

module.exports = {
  createQuoteTemplate,
  findQuoteTemplateById,
  updateQuoteTemplate,
  deleteQuoteTemplate,
  getAllQuoteTemplate,
};
