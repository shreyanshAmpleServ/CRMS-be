const leadsModel = require('../models/leadModel');

const createLead = async (data) => {
  return await leadsModel.createLead(data);
};

const findLeadById = async (id) => {
  return await leadsModel.findLeadById(id);
};

const updateLead = async (id, data) => {
  return await leadsModel.updateLead(id, data);
};

const deleteLead = async (id) => {
  return await leadsModel.deleteLead(id);
};

const getAllLeads = async (page , size , search ,startDate,endDate ,status,userId ) => {
  return await leadsModel.getAllLeads(page , size , search ,startDate,endDate ,status,userId );
};
const getAllLeadsGroupedByLostReasons = async (userId) => {
  return await leadsModel.getAllLeadsGroupedByLostReasons(userId);
};
const leadOwnerTransfer = async (lead_ids,owner_id,userId) => {
  return await leadsModel.leadOwnerTransfer(lead_ids,owner_id,userId);
};


module.exports = {
  createLead,
  findLeadById,
  updateLead,
  deleteLead,
  getAllLeads,
  getAllLeadsGroupedByLostReasons,
  leadOwnerTransfer
};
