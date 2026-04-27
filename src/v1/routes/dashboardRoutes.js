const express = require("express");
const dashboardController = require("../controller/dashboardController"); // Assuming the controller is named dashboardController.js
const { authenticateToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get(
  "/dashboard/:id",
  authenticateToken,
  dashboardController.getDealById,
);

router.get(
  "/dashboard",
  authenticateToken,
  dashboardController.getDashboardData,
);
router.get(
  "/dashboard-deal-list",
  authenticateToken,
  dashboardController.getDealListDashboardData,
);
router.get(
  "/dashboard-deal-values",
  authenticateToken,
  dashboardController.getDealValueDashboardData,
);
router.get(
  "/dashboard-deal-won",
  authenticateToken,
  dashboardController.getDealWonDashboardData,
);
router.get(
  "/dashboard-deal-loss",
  authenticateToken,
  dashboardController.getDealLossDashboardData,
);
router.get(
  "/dashboard-deal-monthly",
  authenticateToken,
  dashboardController.getMonthlyDealDashboardData,
);
router.get(
  "/dashboard-deal-generation",
  authenticateToken,
  dashboardController.getAchivedTargetDealGraph,
);
router.get(
  "/dashboard-deal-achievement",
  authenticateToken,
  dashboardController.getSalesTargetVsAchievedGraph,
);

module.exports = router;
