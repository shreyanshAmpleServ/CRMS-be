const quoteTemplateService = require("../services/quoteTemplateService");
const CustomError = require("../../utils/CustomError");
const moment = require("moment");

const createQuoteTemplate = async (req, res, next) => {
  try {
    const reqData = await quoteTemplateService.createQuoteTemplate(
    {  ...req.body,createdby:req.user.id}
    );
    res.status(201).success("Order created successfully", reqData);
  } catch (error) {
    next(error);
  }
};

const getQuoteTemplateById = async (req, res, next) => {
  try {
    const reqData = await quoteTemplateService.findQuoteTemplateById(req.params.id);
    if (!reqData) throw new CustomError("order not found", 404);
    res.status(200).success(null, reqData);
  } catch (error) {
    next(error);
  }
};

const updateQuoteTemplate = async (req, res, next) => {
  try {
  
    const tempData = {
      ...req.body,
      updatedby: req.user.id,
    };

    const reqData = await quoteTemplateService.updateQuoteTemplate(
      req.params?.id,
      tempData,
    );
    res.status(200).success("Order updated successfully", reqData);

  } catch (error) {
    next(error);
  }
};

const deleteQuoteTemplate = async (req, res, next) => {
  try {
    await quoteTemplateService.deleteQuoteTemplate(req.params.id);
    res.status(200).success("order deleted successfully", null);
  
  } catch (error) {
    next(error);
  }
};
const getAllQuoteTemplate = async (req, res, next) => {
  try {
    const { page, size, search, startDate, endDate } = req.query;
    const reqDatas = await quoteTemplateService.getAllQuoteTemplate(
      search,
      Number(page),
      Number(size),
      startDate && moment(startDate),
      endDate && moment(endDate)
    );
    res.status(200).success(null, reqDatas);
    // res.status(200).json({ success: true,   message:"reqData get successfully" , reqDatas });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createQuoteTemplate,
  getQuoteTemplateById,
  updateQuoteTemplate,
  deleteQuoteTemplate,
  getAllQuoteTemplate,
};
