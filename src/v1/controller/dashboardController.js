const dashboardService = require("../services/dashboardService");
const CustomError = require("../../utils/CustomError");

const getDealById = async (req, res, next) => {
  try {
    const getData = await dashboardService.findDealById(req.params.id);
    if (!getData) throw new CustomError("Deals not found", 404);
    res.status(200).success(null, getData);
  } catch (error) {
    next(error);
  }
};

const getDashboardData = async (req, res, next) => {
  try {
    const user = req.user;
    const getAllData = await dashboardService.getDashboardData(
      req.query.filterDays,
      user,
    );
    res.status(200).success(null, getAllData);
  } catch (error) {
    next(error);
  }
};
const getDealListDashboardData = async (req, res, next) => {
  try {
    const user = req.user;
    const getAllData = await dashboardService.getDealListDashboardData(
      req.query,
      user,
    );
    res.status(200).success(null, getAllData);
  } catch (error) {
    next(error);
  }
};
const getDealValueDashboardData = async (req, res, next) => {
  try {
    const user = req.user;
    const getAllData = await dashboardService.getDealValueDashboardData(
      req.query,
      user,
    );
    res.status(200).success(null, getAllData);
  } catch (error) {
    next(error);
  }
};
const getDealWonDashboardData = async (req, res, next) => {
  try {
    const user = req.user;
    const getAllData = await dashboardService.getDealWonDashboardData(
      req.query,
      user,
    );
    res.status(200).success(null, getAllData);
  } catch (error) {
    next(error);
  }
};
const getDealLossDashboardData = async (req, res, next) => {
  try {
    const user = req.user;
    const getAllData = await dashboardService.getDealLossDashboardData(
      req.query,
      user,
    );
    res.status(200).success(null, getAllData);
  } catch (error) {
    next(error);
  }
};
const getMonthlyDealDashboardData = async (req, res, next) => {
  try {
    const user = req.user;
    const getAllData = await dashboardService.getMonthlyDealDashboardData(
      req.query,
      user,
    );
    res.status(200).success(null, getAllData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDealById,
  getDashboardData,
  getMonthlyDealDashboardData,
  getDealLossDashboardData,
  getDealWonDashboardData,
  getDealValueDashboardData,
  getDealListDashboardData,
};
