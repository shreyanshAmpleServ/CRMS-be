const dealModel = require('../models/dealModel');

const createDeal = async (data) => {
  return await dealModel.createDeal(data);
};

const findDealById = async (id) => {
  return await dealModel.findDealById(id);
};

const findDealsByStatus = async (status) => {
  return await dealModel.findDealsByStatus(status);
};

const updateDeal = async (id, data) => {
  return await dealModel.updateDeal(id, data);
};
const transferDealOwner = async (deal_ids,owner_id,userId) => {
  return await dealModel.transferDealOwner(deal_ids,owner_id,userId);
};

const deleteDeal = async (id) => {
  return await dealModel.deleteDeal(id);
};

const getAllDeals = async ( page , size , search ,startDate,endDate ,status ,priority,userId  ) => {
  return await dealModel.getAllDeals( page , size , search ,startDate,endDate ,status ,priority,userId  );
};

module.exports = {
  createDeal,
  findDealById,
  findDealsByStatus,
  updateDeal,
  deleteDeal,
  getAllDeals,
  transferDealOwner
};
