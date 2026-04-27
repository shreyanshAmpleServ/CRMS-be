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
    const { startDate, endDate, stage_id, priority, assigneeId } = filterDays;
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
    if (assigneeId) filters.assigneeId = Number(assigneeId);

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
    const { startDate, endDate, assigneeId } = filterDays;
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
    if (assigneeId) filters.assigneeId = Number(assigneeId);

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
    const { startDate, endDate, assigneeId } = filterDays;
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
    if (assigneeId) filters.assigneeId = Number(assigneeId);

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
    const { year, assigneeId } = filterDays;

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
    if (assigneeId) whereClause.assigneeId = Number(assigneeId);

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
// const getAchivedTargetDealGraph = async (filters, user) => {
//   try {
//     const { startDate, endDate, pipelineId, assigneeId, stageId } = filters;

//     const whereClause = {};

//     // ✅ Date Range Filter
//     if (startDate && endDate) {
//       whereClause.dueDate = {
//         gte: new Date(startDate),
//         lte: new Date(endDate),
//       };
//     }

//     // ✅ Pipeline Filter
//     if (pipelineId) {
//       whereClause.pipelineId = Number(pipelineId);
//     }

//     // ✅ Sales Rep Filter
//     if (assigneeId) {
//       whereClause.assigneeId = Number(assigneeId);
//     }

//     // ✅ Stage Filter
//     if (stageId) {
//       whereClause.stageId = Number(stageId);
//     }

//     // ✅ Role Filter
//     if (user && user.role !== "Admin") {
//       whereClause.OR = [
//         { createdBy: Number(user.id) },
//         { updatedBy: Number(user.id) },
//         { assigneeId: Number(user.id) },
//       ];
//     }

//     // ✅ Fetch Deals
//     const deals = await prisma.Deal.findMany({
//       where: whereClause,
//       select: {
//         dueDate: true,
//         dealValue: true,
//       },
//     });

//     // ✅ Initialize months
//     const months = Array(12).fill(0);

//     deals.forEach((deal) => {
//       if (!deal.dueDate) return;

//       const month = new Date(deal.dueDate).getMonth(); // 0–11
//       months[month] += deal.dealValue || 0;
//     });

//     // ✅ Target Logic
//     const yearlyTarget = 600;
//     const monthlyTarget = yearlyTarget / 12;

//     const targetData = Array(12).fill(monthlyTarget);

//     return {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//       series: [
//         {
//           name: "Target",
//           data: targetData,
//         },
//         {
//           name: "Actual",
//           data: months,
//         },
//       ],
//     };
//   } catch (error) {
//     console.error("Opportunity Graph Error:", error);
//     throw new CustomError("Error fetching opportunity graph", 500);
//   }
// };
const getAchivedTargetDealGraph = async (filters, user) => {
  try {
    const { startDate, endDate, monthlyDealFilter, assigneeId, stageId } =
      filters;

    const whereClause = {};

    // ✅ Date Range Filter
    if (startDate && endDate) {
      whereClause.dueDate = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    // ✅ Pipeline Filter
    if (monthlyDealFilter) {
      whereClause.pipelineId = Number(monthlyDealFilter);
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

    // ✅ Fetch Deals (only need dueDate now)
    const deals = await prisma.Deal.findMany({
      where: whereClause,
      select: {
        dueDate: true,
      },
    });

    // ✅ Initialize months (count-based)
    const months = Array(12).fill(0);

    deals.forEach((deal) => {
      if (!deal.dueDate) return;

      const month = new Date(deal.dueDate).getMonth(); // 0–11
      months[month] += 1; // ✅ COUNT instead of VALUE
    });

    // ✅ Target Logic (count-based)
    const yearlyTarget = 600; // total opportunities
    const monthlyTarget = Math.round(yearlyTarget / 12);

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
const getSalesTargetVsAchievedGraph = async (filters, user) => {
  try {
    const {
      startDate,
      endDate,
      pipelineId,
      assigneeId, // Sales Rep
      stageId,
      yearTarget, // optional fallback if you don't store targets in DB
    } = filters;

    // -----------------------------
    // 1) Build Date Range
    // -----------------------------
    const start = startDate
      ? new Date(startDate)
      : new Date(new Date().getFullYear(), 0, 1);
    const end = endDate
      ? new Date(endDate)
      : new Date(new Date().getFullYear(), 11, 31);

    // Helper: month list between start & end (inclusive)
    const monthKeys = [];
    const categories = [];
    const cursor = new Date(start.getFullYear(), start.getMonth(), 1);

    while (cursor <= end) {
      const y = cursor.getFullYear();
      const m = cursor.getMonth(); // 0-11

      monthKeys.push(`${y}-${String(m + 1).padStart(2, "0")}`);
      categories.push(
        cursor.toLocaleString("en-US", { month: "short" }) +
          "-" +
          String(y).slice(2),
      );

      cursor.setMonth(cursor.getMonth() + 1);
    }

    // -----------------------------
    // 2) Build WHERE clause (Deals)
    // -----------------------------
    const whereClause = {};

    // Only include closed/won deals (assuming "Closed" or "Won" status)
    whereClause.status = "Closed"; // or "Won" - adjust based on your status values

    // Use expectedCloseDate instead of closeDate
    whereClause.expectedCloseDate = { gte: start, lte: end };

    if (pipelineId) whereClause.pipelineId = Number(pipelineId);
    if (assigneeId) whereClause.assigneeId = Number(assigneeId);
    if (stageId) whereClause.stageId = Number(stageId);

    // Role-based access (same pattern you used)
    if (user && user.role !== "Admin") {
      whereClause.OR = [
        { createdBy: Number(user.id) },
        { updatedBy: Number(user.id) },
        { assigneeId: Number(user.id) },
      ];
    }

    // -----------------------------
    // 3) Fetch deals (Achieved = SUM of dealValue per month)
    // -----------------------------
    const deals = await prisma.Deal.findMany({
      where: whereClause,
      select: {
        expectedCloseDate: true, // Changed from closeDate
        dealValue: true, // Changed from amount
      },
    });

    // Init achieved map for all months
    const achievedMap = {};
    monthKeys.forEach((k) => (achievedMap[k] = 0));

    deals.forEach((d) => {
      if (!d.expectedCloseDate) return;
      const dt = new Date(d.expectedCloseDate);
      const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}`;

      if (achievedMap[key] == null) return;

      achievedMap[key] += Number(d.dealValue || 0);
    });

    const achievedData = monthKeys.map((k) => achievedMap[k]);

    // -----------------------------
    // 4) Target logic
    // -----------------------------
    const targetData = [];
    for (const key of monthKeys) {
      const [yStr, mm] = key.split("-");
      const year = Number(yStr);

      // Try to get rep target for that year (assigneeId preferred, else current user)
      const targetUserId = assigneeId ? Number(assigneeId) : Number(user?.id);

      let monthlyTarget = null;

      // If you HAVE a SalesTarget table, uncomment & adapt:
      /*
      const targetRow = await prisma.SalesTarget.findFirst({
        where: { userId: targetUserId, year },
        select: { yearlyTarget: true, monthlyDistribution: true },
      });

      if (targetRow?.monthlyDistribution?.[mm] != null) {
        monthlyTarget = Number(targetRow.monthlyDistribution[mm]);
      } else if (targetRow?.yearlyTarget != null) {
        monthlyTarget = Number(targetRow.yearlyTarget) / 12;
      }
      */

      // Option B (Fallback): use filters.yearTarget or a hardcoded yearly target
      const fallbackYearlyTarget = Number(yearTarget || 250000); // like your image (250,000)
      if (monthlyTarget == null) monthlyTarget = fallbackYearlyTarget / 12;

      targetData.push(Math.round(monthlyTarget));
    }

    // Totals (for table footer)
    const totalTarget = targetData.reduce((a, b) => a + b, 0);
    const totalAchieved = achievedData.reduce((a, b) => a + b, 0);

    return {
      categories, // ["Jan-22", "Feb-22", ...]
      series: [
        { name: "Target", data: targetData },
        { name: "Achieved", data: achievedData },
      ],
      table: monthKeys.map((k, idx) => ({
        month: categories[idx],
        target: targetData[idx],
        achieved: achievedData[idx],
      })),
      totals: { target: totalTarget, achieved: totalAchieved },
    };
  } catch (error) {
    console.error("Sales Target vs Achieved Error:", error);
    throw new CustomError("Error fetching Sales Target vs Achieved graph", 500);
  }
};

// const getSalesTargetVsAchievedGraph = async (filters, user) => {
//   try {
//     const {
//       startDate,
//       endDate,
//       pipelineId,
//       assigneeId, // Sales Rep
//       stageId,
//       yearTarget, // optional fallback if you don’t store targets in DB
//     } = filters;

//     // -----------------------------
//     // 1) Build Date Range
//     // -----------------------------
//     const start = startDate
//       ? new Date(startDate)
//       : new Date(new Date().getFullYear(), 0, 1);
//     const end = endDate
//       ? new Date(endDate)
//       : new Date(new Date().getFullYear(), 11, 31);

//     // Helper: month list between start & end (inclusive)
//     const monthKeys = [];
//     const categories = [];
//     const cursor = new Date(start.getFullYear(), start.getMonth(), 1);

//     while (cursor <= end) {
//       const y = cursor.getFullYear();
//       const m = cursor.getMonth(); // 0-11

//       monthKeys.push(`${y}-${String(m + 1).padStart(2, "0")}`);
//       categories.push(
//         cursor.toLocaleString("en-US", { month: "short" }) +
//           "-" +
//           String(y).slice(2),
//       );

//       cursor.setMonth(cursor.getMonth() + 1);
//     }

//     // -----------------------------
//     // 2) Build WHERE clause (Deals)
//     // -----------------------------
//     const whereClause = {};

//     // Date filter (IMPORTANT: use your “achieved” date field)
//     // Replace `closeDate` with your actual field: closeDate / closedAt / wonAt / updatedAt etc.
//     whereClause.closeDate = { gte: start, lte: end };

//     if (pipelineId) whereClause.pipelineId = Number(pipelineId);
//     if (assigneeId) whereClause.assigneeId = Number(assigneeId);
//     if (stageId) whereClause.stageId = Number(stageId);

//     // Role-based access (same pattern you used)
//     if (user && user.role !== "Admin") {
//       whereClause.OR = [
//         { createdBy: Number(user.id) },
//         { updatedBy: Number(user.id) },
//         { assigneeId: Number(user.id) },
//       ];
//     }

//     // -----------------------------
//     // 3) Fetch deals (Achieved = SUM of amount per month)
//     // -----------------------------
//     const deals = await prisma.Deal.findMany({
//       where: whereClause,
//       select: {
//         closeDate: true, // <-- replace if needed
//         amount: true, // <-- replace with your value field (value/dealValue/expectedRevenue)
//       },
//     });

//     // Init achieved map for all months
//     const achievedMap = {};
//     monthKeys.forEach((k) => (achievedMap[k] = 0));

//     deals.forEach((d) => {
//       if (!d.closeDate) return;
//       const dt = new Date(d.closeDate);
//       const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}`;

//       if (achievedMap[key] == null) return;

//       achievedMap[key] += Number(d.amount || 0);
//     });

//     const achievedData = monthKeys.map((k) => achievedMap[k]);

//     // -----------------------------
//     // 4) Target logic
//     // -----------------------------
//     // Option A (Recommended): Fetch target from DB per Sales Rep + Year (+ monthly distribution)
//     // Example schema assumption:
//     // SalesTarget: { userId, year, yearlyTarget, monthlyDistribution (Json) }
//     //
//     // monthlyDistribution example:
//     // { "01": 20833, "02": 20833, ... "12": 20833 }

//     const targetData = [];
//     for (const key of monthKeys) {
//       const [yStr, mm] = key.split("-");
//       const year = Number(yStr);

//       // Try to get rep target for that year (assigneeId preferred, else current user)
//       const targetUserId = assigneeId ? Number(assigneeId) : Number(user?.id);

//       let monthlyTarget = null;

//       // If you HAVE a table, uncomment & adapt:
//       /*
//       const targetRow = await prisma.SalesTarget.findFirst({
//         where: { userId: targetUserId, year },
//         select: { yearlyTarget: true, monthlyDistribution: true },
//       });

//       if (targetRow?.monthlyDistribution?.[mm] != null) {
//         monthlyTarget = Number(targetRow.monthlyDistribution[mm]);
//       } else if (targetRow?.yearlyTarget != null) {
//         monthlyTarget = Number(targetRow.yearlyTarget) / 12;
//       }
//       */

//       // Option B (Fallback): use filters.yearTarget or a hardcoded yearly target
//       const fallbackYearlyTarget = Number(yearTarget || 250000); // like your image (250,000)
//       if (monthlyTarget == null) monthlyTarget = fallbackYearlyTarget / 12;

//       targetData.push(Math.round(monthlyTarget));
//     }

//     // Totals (for table footer)
//     const totalTarget = targetData.reduce((a, b) => a + b, 0);
//     const totalAchieved = achievedData.reduce((a, b) => a + b, 0);

//     return {
//       categories, // ["Jan-22", "Feb-22", ...]
//       series: [
//         { name: "Target", data: targetData },
//         { name: "Achieved", data: achievedData },
//       ],
//       table: monthKeys.map((k, idx) => ({
//         month: categories[idx],
//         target: targetData[idx],
//         achieved: achievedData[idx],
//       })),
//       totals: { target: totalTarget, achieved: totalAchieved },
//     };
//   } catch (error) {
//     console.error("Sales Target vs Achieved Error:", error);
//     throw new CustomError("Error fetching Sales Target vs Achieved graph", 500);
//   }
// };
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
  getSalesTargetVsAchievedGraph,
};
