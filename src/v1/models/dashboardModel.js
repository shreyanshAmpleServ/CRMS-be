const { PrismaClient } = require("@prisma/client");
const CustomError = require("../../utils/CustomError");
const moment = require("moment");
const prisma = new PrismaClient();

// Parse `tags` after retrieving it
const parseTags = (deal) => {
  if (deal && deal.tags) {
    deal.tags = JSON.parse(deal.tags);
  }
  return deal;
};

// Find a deal by its ID
const findDealById = async (id) => {
  try {
    const deal = await prisma.Deal.findUnique({
      where: { id: parseInt(id) },
      include: {
        DealContacts: {
          include: {
            contact: true, // Include contact details
          },
        },
        DealHistory: true,
      },
    });
    return parseTags(deal);
  } catch (error) {
    throw new CustomError("Error finding deal by ID", 503);
  }
};

// Get all deals
const getDealListDashboardData = async (filterDays, user) => {
  try {
    const { startDate, endDate } = filterDays;
    const startMoment = moment(startDate).startOf("day");
    const endMoment = moment(endDate).endOf("day");
    const filters = {};
    if (user && user.role !== "Admin") {
      filters.OR = [
        { createdBy: { equals: Number(user.id) } },
        { updatedBy: { equals: Number(user.id) } },
        { assigneeId: { equals: Number(user.id) } },
      ];
    }

    if (!startMoment.isValid() || !endMoment.isValid()) {
      throw new Error("Invalid date range provided");
    }
    const deal = await prisma.Deal.findMany({
      where: {
        ...filters,
        createdDate: {
          gte: startMoment.toDate(), // Get deals from the selected range
          lte: endMoment.toDate(), // Get deals from the last `filterDays`
        },
      },
      include: {
        deals: true,
        pipeline: true,
      },

      orderBy: [{ updatedDate: "desc" }, { createdDate: "desc" }],
    });

    return {
      deal: deal,
    };
  } catch (error) {
    console.log("Dashboard getting error : ", error);
    throw new CustomError("Error retrieving dashboard", 503);
  }
};
const getDealValueDashboardData = async (filterDays, user) => {
  try {
    const { startDate, endDate, stage_id, priority } = filterDays;
    const startMoment = moment(startDate).startOf("day");
    const endMoment = moment(endDate).endOf("day");
    const filters = {};
    if (user && user.role !== "Admin") {
      filters.OR = [
        { createdBy: { equals: Number(user.id) } },
        { updatedBy: { equals: Number(user.id) } },
        { assigneeId: { equals: Number(user.id) } },
      ];
    }

    if (!startMoment.isValid() || !endMoment.isValid()) {
      throw new Error("Invalid date range provided");
    }

    const deals = await prisma.Deal.findMany({
      where: {
        ...filters,
        ...(startMoment &&
          endMoment && {
            createdDate: {
              gte: startMoment.toDate(),
              lte: endMoment.toDate(),
            },
          }),
        ...(filterDays?.dealsPipelineFilter && {
          pipelineId: Number(filterDays?.dealsPipelineFilter),
        }),
        ...(stage_id && {
          stage_id: Number(stage_id),
        }),
        ...(priority && {
          priority: Number(priority),
        }),
      },
      include: {
        deals: true,
        pipeline: true,
      },
      orderBy: [{ updatedDate: "desc" }, { createdDate: "desc" }],
    });

    const formattedDeals = deals.map((deal) => {
      const { deals, ...rest } = parseTags(deal); // Remove "deals" key
      return { ...rest, stages: deal.deals || [] }; // Rename "stages" to "deals"
    });

    return {
      deals: formattedDeals,
    };
  } catch (error) {
    console.log("Dashboard getting error : ", error);
    throw new CustomError("Error retrieving dashboard", 503);
  }
};
const getDealWonDashboardData = async (filterDays, user) => {
  try {
    const { startDate, endDate } = filterDays;
    const startMoment = moment(startDate).startOf("day");
    const endMoment = moment(endDate).endOf("day");
    const filters = {};
    if (user && user.role !== "Admin") {
      filters.OR = [
        { createdBy: { equals: Number(user.id) } },
        { updatedBy: { equals: Number(user.id) } },
        { assigneeId: { equals: Number(user.id) } },
      ];
    }

    if (!startMoment.isValid() || !endMoment.isValid()) {
      throw new Error("Invalid date range provided");
    }
    const dealsss = await prisma.Deal.findMany({
      where: {
        ...filters,
        ...(startMoment &&
          endMoment && {
            createdDate: {
              gte: startMoment.toDate(),
              lte: endMoment.toDate(),
            },
          }),
        ...(filterDays?.wonDealFilter && {
          pipelineId: Number(filterDays?.wonDealFilter),
        }),
      },
      include: {
        deals: true,
        pipeline: true,
      },
    });
    const wonDeals = dealsss.filter((deal) => deal.status === "Won");

    return {
      wonDeals: wonDeals,
    };
  } catch (error) {
    console.log("Dashboard getting error : ", error);
    throw new CustomError("Error retrieving dashboard", 503);
  }
};
const getDealLossDashboardData = async (filterDays, user) => {
  try {
    const { startDate, endDate } = filterDays;
    const startMoment = moment(startDate).startOf("day");
    const endMoment = moment(endDate).endOf("day");
    const filters = {};
    if (user && user.role !== "Admin") {
      filters.OR = [
        { createdBy: { equals: Number(user.id) } },
        { updatedBy: { equals: Number(user.id) } },
        { assigneeId: { equals: Number(user.id) } },
      ];
    }

    if (!startMoment.isValid() || !endMoment.isValid()) {
      throw new Error("Invalid date range provided");
    }
    const dealssss = await prisma.Deal.findMany({
      where: {
        ...filters,
        ...(startMoment &&
          endMoment && {
            createdDate: {
              gte: startMoment.toDate(),
              lte: endMoment.toDate(),
            },
          }),
        ...(filterDays?.lostDealFilter && {
          pipelineId: Number(filterDays?.lostDealFilter),
        }),
      },
      include: {
        deals: true,
        pipeline: true,
      },
    });
    const lostDeals = dealssss.filter((deal) => deal.status === "Lost");

    return {
      lostDeals: lostDeals,
    };
  } catch (error) {
    console.log("Dashboard getting error : ", error);
    throw new CustomError("Error retrieving dashboard", 503);
  }
};
const getMonthlyDealDashboardData = async (filterDays, user) => {
  try {
    const { year } = filterDays;

    const whereClause = {};

    // ✅ Apply pipeline filter
    if (filterDays?.monthlyDealFilter) {
      whereClause.pipelineId = Number(filterDays.monthlyDealFilter);
    }

    // ✅ Apply role-based filter
    if (user && user.role !== "Admin") {
      whereClause.OR = [
        { createdBy: Number(user.id) },
        { updatedBy: Number(user.id) },
        { assigneeId: Number(user.id) },
      ];
    }

    // ✅ Apply year filter (IMPORTANT)
    if (year) {
      const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
      const endDate = new Date(`${year}-12-31T23:59:59.999Z`);

      whereClause.dueDate = {
        gte: startDate,
        lte: endDate,
      };
    }

    // ✅ Fetch filtered deals
    const deals = await prisma.Deal.findMany({
      where: whereClause,
      select: {
        dueDate: true,
        dealValue: true,
      },
    });

    // ✅ Aggregate by month
    const monthlyDeals = {};

    deals.forEach((deal) => {
      if (!deal.dueDate) return;

      const month = new Date(deal.dueDate).getMonth() + 1;
      monthlyDeals[month] = (monthlyDeals[month] || 0) + (deal.dealValue || 0);
    });

    return {
      monthlyDeals: monthlyDeals,
    };
  } catch (error) {
    console.log("Dashboard getting error : ", error);
    throw new CustomError("Error retrieving dashboard", 503);
  }
};
const getAchivedTargetDealGraph = async (filters, user) => {
  try {
    const { startDate, endDate, pipelineId, assigneeId, stageId } = filters;

    const whereClause = {};

    // ✅ Date Range Filter
    if (startDate && endDate) {
      whereClause.dueDate = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    // ✅ Pipeline Filter
    if (pipelineId) {
      whereClause.pipelineId = Number(pipelineId);
    }

    // ✅ Sales Rep Filter
    if (assigneeId) {
      whereClause.assigneeId = Number(assigneeId);
    }

    // ✅ Stage Filter
    if (stageId) {
      whereClause.stageId = Number(stageId);
    }

    // ✅ Role Filter
    if (user && user.role !== "Admin") {
      whereClause.OR = [
        { createdBy: Number(user.id) },
        { updatedBy: Number(user.id) },
        { assigneeId: Number(user.id) },
      ];
    }

    // ✅ Fetch Deals
    const deals = await prisma.Deal.findMany({
      where: whereClause,
      select: {
        dueDate: true,
        dealValue: true,
      },
    });

    // ✅ Initialize months
    const months = Array(12).fill(0);

    deals.forEach((deal) => {
      if (!deal.dueDate) return;

      const month = new Date(deal.dueDate).getMonth(); // 0–11
      months[month] += deal.dealValue || 0;
    });

    // ✅ Target Logic
    const yearlyTarget = 600;
    const monthlyTarget = yearlyTarget / 12;

    const targetData = Array(12).fill(monthlyTarget);

    return {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      series: [
        {
          name: "Target",
          data: targetData,
        },
        {
          name: "Actual",
          data: months,
        },
      ],
    };
  } catch (error) {
    console.error("Opportunity Graph Error:", error);
    throw new CustomError("Error fetching opportunity graph", 500);
  }
};
const getDashboardData = async (filterDays, user) => {
  try {
    console.log("User get : ", user);
    const { startDate, endDate } = filterDays;
    const startMoment = moment(startDate);
    const endMoment = moment(endDate);
    const filters = {};
    if (user && user.role !== "Admin") {
      filters.OR = [
        { createdBy: { equals: Number(user.id) } },
        { updatedBy: { equals: Number(user.id) } },
        { assigneeId: { equals: Number(user.id) } },
      ];
    }

    if (!startMoment.isValid() || !endMoment.isValid()) {
      throw new Error("Invalid date range provided");
    }
    const deal = await prisma.Deal.findMany({
      where: {
        ...filters,
        createdDate: {
          gte: startMoment.toDate(), // Get deals from the selected range
          lte: endMoment.toDate(), // Get deals from the last `filterDays`
        },
      },
      include: {
        deals: true,
        pipeline: true,
      },

      orderBy: [{ updatedDate: "desc" }, { createdDate: "desc" }],
    });
    const deals = await prisma.Deal.findMany({
      where: {
        ...filters,
        ...(startMoment &&
          endMoment && {
            createdDate: {
              gte: startMoment.toDate(),
              lte: endMoment.toDate(),
            },
          }),
        ...(filterDays?.dealsPipelineFilter && {
          pipelineId: Number(filterDays?.dealsPipelineFilter),
        }),
      },
      include: {
        deals: true,
        pipeline: true,
      },
      orderBy: [{ updatedDate: "desc" }, { createdDate: "desc" }],
    });
    const dealsss = await prisma.Deal.findMany({
      where: {
        ...filters,
        ...(startMoment &&
          endMoment && {
            createdDate: {
              gte: startMoment.toDate(),
              lte: endMoment.toDate(),
            },
          }),
        ...(filterDays?.wonDealFilter && {
          pipelineId: Number(filterDays?.wonDealFilter),
        }),
      },
      include: {
        deals: true,
        pipeline: true,
      },
    });
    const wonDeals = dealsss.filter((deal) => deal.status === "Won");
    const dealssss = await prisma.Deal.findMany({
      where: {
        ...filters,
        ...(startMoment &&
          endMoment && {
            createdDate: {
              gte: startMoment.toDate(),
              lte: endMoment.toDate(),
            },
          }),
        ...(filterDays?.lostDealFilter && {
          pipelineId: Number(filterDays?.lostDealFilter),
        }),
      },
      include: {
        deals: true,
        pipeline: true,
      },
    });
    const lostDeals = dealssss.filter((deal) => deal.status === "Lost");

    // Process deals to count them by month
    const dealss = await prisma.Deal.findMany({
      where: filterDays?.monthlyDealFilter && {
        pipelineId: Number(filterDays?.monthlyDealFilter),
      },
    });
    const monthlyDeals = {};
    dealss.forEach((deal) => {
      const month = new Date(deal.dueDate).getMonth() + 1; // Get month (1-12)
      monthlyDeals[month] = (monthlyDeals[month] || 0) + (deal.dealValue || 0); // Sum dealValue
    });

    const formattedDeals = deals.map((deal) => {
      const { deals, ...rest } = parseTags(deal); // Remove "deals" key
      return { ...rest, stages: deal.deals || [] }; // Rename "stages" to "deals"
    });

    return {
      deal: deal,
      deals: formattedDeals,
      monthlyDeals: monthlyDeals,
      wonDeals: wonDeals,
      lostDeals: lostDeals,
    };
  } catch (error) {
    console.log("Dashboard getting error : ", error);
    throw new CustomError("Error retrieving dashboard", 503);
  }
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
