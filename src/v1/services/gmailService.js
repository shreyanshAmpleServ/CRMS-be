const gmailModel = require('../models/gmailModel');

const sendEmail = async (data) => {
  return await gmailModel.sendGmailModal(data);
};
const getAllEmail = async (res,data,req) => {
  return await gmailModel.getGmailModal(res,data,req);
};


module.exports = {
  sendEmail,
  getAllEmail,
};
