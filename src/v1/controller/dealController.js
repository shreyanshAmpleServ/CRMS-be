const dealService = require("../services/dealService");
const CustomError = require("../../utils/CustomError");
const moment = require("moment");

const serializeDatas = (data) => {
  const { pipelineId, ...datas } = data;
  return {
    ...datas,
    pipeline: {
      connect: { id: Number(pipelineId) },
    },
  };
};

const createDeal = async (req, res, next) => {
  try {
    const serializedData = serializeDatas(req.body);
    const deal = await dealService.createDeal({...req.body,createdBy:req.user.id,});
    res.status(201).success("Deal created successfully", deal);
  } catch (error) {
    next(error);
  }
};

const getDealById = async (req, res, next) => {
  try {
    const deal = await dealService.findDealById(req.params.id);
    if (!deal) throw new CustomError("Deal not found", 404);
    res.status(200).success(null, deal);
  } catch (error) {
    next(error);
  }
};

const updateDeal = async (req, res, next) => {
  try {
    const deal = await dealService.updateDeal(req.params.id, {...req.body,updatedBy:req.user.id});
    res.status(200).success("Deal updated successfully", deal);
  } catch (error) {
    next(error);
  }
};
const transferDealOwner = async (req, res, next) => {
  try {
    const userId = req.user;
    const {deal_ids,owner_id} = req.body
    const deal = await dealService.transferDealOwner(deal_ids,owner_id,userId);
    res.status(200).success("Deal owner transfer successfully", deal);
  } catch (error) {
    next(error);
  }
};

const deleteDeal = async (req, res, next) => {
  try {
    await dealService.deleteDeal(req.params.id);
    res.status(200).success("Deal deleted successfully", null);
  } catch (error) {
    next(error);
  }
};

const getAllDeals = async (req, res, next) => {
  try {
    const { page, size, search, startDate, endDate, status, priority } =
      req.query;
    const userId = req.user;
    const deals = await dealService.getAllDeals(
      Number(page),
      Number(size),
      search,
      startDate && moment(startDate),
      endDate && moment(endDate),
      status,
      priority,
      userId
    );
    res.status(200).success(null, deals);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createDeal,
  getDealById,
  updateDeal,
  deleteDeal,
  getAllDeals,
  transferDealOwner
};
