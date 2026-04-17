const dashboardModel = require("../models/dashboardModel");

const findDealById = async (id) => {
  return await dashboardModel.findDealById(id);
};
const getDashboardData = async (filterDays, user) => {
  return await dashboardModel.getDashboardData(filterDays, user);
};
const getDealListDashboardData = async (filterDays, user) => {
  return await dashboardModel.getDealListDashboardData(filterDays, user);
};
const getDealValueDashboardData = async (filterDays, user) => {
  return await dashboardModel.getDealValueDashboardData(filterDays, user);
};
const getDealWonDashboardData = async (filterDays, user) => {
  return await dashboardModel.getDealWonDashboardData(filterDays, user);
};
const getDealLossDashboardData = async (filterDays, user) => {
  return await dashboardModel.getDealLossDashboardData(filterDays, user);
};
const getMonthlyDealDashboardData = async (filterDays, user) => {
  return await dashboardModel.getMonthlyDealDashboardData(filterDays, user);
};
const getAchivedTargetDealGraph = async (filterDays, user) => {
  return await dashboardModel.getAchivedTargetDealGraph(filterDays, user);
};

module.exports = {
  findDealById,
  getDashboardData,
  getMonthlyDealDashboardData,
  getDealLossDashboardData,
  getDealWonDashboardData,
  getDealValueDashboardData,
  getDealListDashboardData,
  getAchivedTargetDealGraph,
};
