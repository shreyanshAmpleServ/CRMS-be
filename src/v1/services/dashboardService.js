const dashboardModel = require('../models/dashboardModel');

const findDealById = async (id) => {
  return await dashboardModel.findDealById(id);
};
const getDashboardData = async (filterDays,user) => {
  return await dashboardModel.getDashboardData(filterDays,user);
};

module.exports = {
  findDealById,
  getDashboardData,
};
