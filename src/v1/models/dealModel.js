const { PrismaClient } = require("@prisma/client");
const CustomError = require("../../utils/CustomError");
const {
  PrismaClientKnownRequestError,
} = require("@prisma/client/runtime/library");
const prisma = new PrismaClient();

// Serialize `tags` before saving it
const serializeTags = (data) => {
  if (data.tags) {
    data.tags = JSON.stringify(data.tags);
  }
  if(!data.assigneeId){
    data.assigneeId = Number(data.createdBy)
  }
  return data;
};

// Parse `tags` after retrieving it
const parseTags = (deal) => {
  if (deal && deal.tags) {
    deal.tags = JSON.parse(deal.tags);
  }
  return deal;
};

// Check if contactIds are valid and exist
const validateContactsExist = async (contactIds) => {
  const contacts = await prisma.crms_m_contact.findMany({
    where: {
      id: {
        in: contactIds.map((contactId) => parseInt(contactId)), // Ensure all are valid integers
      },
    },
  });

  if (contacts?.length !== contactIds.length) {
    throw new CustomError(
      "One or more contact IDs are invalid or do not exist.",
      400
    );
  }
};
const getDealsWithReferences = async (id) => {
  const Deal = await prisma.Deal.findUnique({
    where: { id: parseInt(id) },
    include: {
      DealContacts: {
        include: {
          contact: true, // Include contact details
        },
      },
      deals: true,
      pipeline: true,
      DealHistory: true,
      deal_currency: true,
      deal_country: true,
      deal_owner:true
    },
  });

  if (!Deal) throw new CustomError("Deal not found", 404);

  return Deal;
};
// Create a new deal
const createDeal = async (data) => {
  const { contactIds, ...dealData } = data; // Separate `contactIds` from other deal data
  try {
    const serializedData = serializeTags(dealData);

    // Validate that all contactIds exist in the crms_m_contact table
    if (contactIds && contactIds.length > 0) {
      await validateContactsExist(contactIds);
    }

    // Use transaction for atomicity
    const result = await prisma.$transaction(async (prisma) => {
      // Create the deal
      const deal = await prisma.Deal.create({
        data: serializedData,
      });

      // Map contacts to the deal
      if (contactIds && contactIds.length > 0) {
        const contactMappings = contactIds.map((contactId) => ({
          dealId: deal.id,
          contactId: parseInt(contactId),
          createdDate: new Date(),
        }));
        await prisma.DealContacts.createMany({ data: contactMappings });
      }
      // Fetch the deal with contacts now that they are inserted
      const fullDeal = await prisma.Deal.findUnique({
        where: { id: deal.id },
        include: {
          DealContacts: {
            include: { contact: true },
          },
          pipeline: true,
          DealHistory: true,
          deal_currency: true,
          deal_country: true,
          deal_owner:true,
        },
      });

      return fullDeal;
    });

    return parseTags(result);
  } catch (error) {
    console.log("Error to Create Opportunity : ", error);
    throw new CustomError(`Error creating Opportunity: ${error.message}`, 500);
  }
};

// Update an existing deal
const updateDeal = async (id, data) => {
  const { contactIds, ...dealData } = data; // Separate `contactIds` from other deal data
  try {
    const updatedData = {
      ...dealData,
      updatedDate: new Date(),
    };
    const serializedData = serializeTags(updatedData);

    // Validate that all contactIds exist in the crms_m_contact table
    if (contactIds && contactIds.length > 0) {
      await validateContactsExist(contactIds);
    }

    // Use transaction for atomicity
    const result = await prisma.$transaction(async (prisma) => {
      // Update the deal
      const deal = await prisma.Deal.update({
        where: { id: parseInt(id) },
        data: serializedData,
      });

      // Update deal-contact mappings
      if (contactIds) {
        // Delete existing mappings
        await prisma.DealContacts.deleteMany({
          where: { dealId: parseInt(id) },
        });

        // Add new mappings
        const contactMappings = contactIds.map((contactId) => ({
          dealId: parseInt(id),
          contactId: parseInt(contactId),
          createdDate: new Date(),
        }));
        await prisma.DealContacts.createMany({ data: contactMappings });
      }
      // Retrieve the updated deal with DealContacts and DealHistory included
      const updatedDeal = await prisma.Deal.findUnique({
        where: { id: parseInt(id) },
        include: {
          DealContacts: {
            include: {
              contact: true, // Include contact details
            },
          },
          deals: true,
          pipeline: true,
          DealHistory: true,
          deal_currency: true,
          deal_country: true,
          deal_owner:true
        },
      });

      return updatedDeal;
    });

    return parseTags(result);
  } catch (error) {
    throw new CustomError(`Error updating Opportunity: ${error.message}`, 500);
  }
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
        deal_currency: true,
        deal_country: true,
        deal_owner:true

      },
    });
    return parseTags(deal);
  } catch (error) {
    throw new CustomError("Error finding Opportunity by ID", 503);
  }
};

// Get all deals
const getAllDeals = async (
  page,
  size,
  search,
  startDate,
  endDate,
  status,
  priority,
  userId
) => {
  try {
    console.log("Page first Count : ", page);
    page = !page || page == 0 ? 1 : page;
    size = size || 10;
    const skip = (page - 1) * size || 0;
    console.log("Page first Count 2 : ", page);

    const filters = {};
    // Handle search
    if (search) {
      filters.OR = [
        {
          DealContacts: {
            some: {
              contact: {
                firstName: { contains: search.toLowerCase() },
              }, // Include contact details
            },
          },
        },
        {
          dealName: { contains: search.toLowerCase() },
        },
        {
          priority: { contains: search.toLowerCase() },
        },
        {
          status: { contains: search.toLowerCase() },
        },
      ];
    }
    if (status) {
      filters.is_active = { equals: status };
    }
    if (priority) {
      filters.priority = { equals: priority };
    }
    // Restrict non-admin users to their own deals
    if (userId && userId.role !== "Admin") {
      filters.OR = [
        { createdBy: { equals: Number(userId.id) } },
        { updatedBy: { equals: Number(userId.id) } },
        { assigneeId: { equals: Number(userId.id) } }
      ]
    }

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        filters.createdDate = {
          gte: start,
          lte: end,
        };
      }
    }
    const deals = await prisma.Deal.findMany({
      where: filters,
      skip: skip,
      take: size,
      include: {
        DealContacts: {
          include: {
            contact: true, // Include contact details
          },
        },
        deals: true,
        pipeline: true,
        DealHistory: true,
        deal_currency: true,
        deal_country: true,
        deal_owner:true

      },
      orderBy: [{ updatedDate: "desc" }, { createdDate: "desc" }],
    });
    const formattedDeals = deals.map((deal) => {
      const { deals, ...rest } = parseTags(deal); // Remove "deals" key
      return { ...rest, stages: deal.deals || [] }; // Rename "stages" to "deals"
    });
    const totalCount = await prisma.Deal.count({ where: filters });
    return {
      data: formattedDeals,
      currentPage: page,
      size,
      totalPages: Math.ceil(totalCount / size),
      totalCount: totalCount,
    };
  } catch (error) {
    console.log("Error opportunity get : ", error);
    throw new CustomError("Error retrieving opportunitys", 503);
  }
};

const deleteDeal = async (id) => {
  try {
    // Step 1: Delete related data from DealContacts
    await prisma.dealContacts.deleteMany({
      where: { dealId: parseInt(id) },
    });

    // Step 2: Delete the deal
    const deletedDeal = await prisma.deal.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2003") {
        // Foreign key constraint failed
        throw new Error(
          "Cannot delete this opportunity because related records exist. Please remove them first."
        );
      }
      if (error.code === "P2025") {
        // Record not found
        throw new Error("Record not found");
      }
    }
    throw new CustomError(`Error deleting opportunity: ${error.message}`, 500);
  }
};
const transferDealOwner = async (deal_ids, owner_id, userId) => {
  try {
    if (!Array.isArray(deal_ids) || deal_ids.length === 0) {
      throw new CustomError('deal_ids must be a non-empty array', 400);
    }
    // Prepare update data
    let updateData = {
      updatedBy: Number(userId),
      updatedDate: new Date(),
    };

    // Only set assigneeId if owner_id is provided
    if (owner_id) {
      updateData.assigneeId = Number(owner_id);
    }
    // Perform a bulk update
    await prisma.Deal.updateMany({
      where: {
        id: { in: deal_ids.map((id) => parseInt(id, 10)) },
      },
      data: updateData
    });

    // Fetch and return each lead with its relations
    const updatedDeals = await Promise.all(
      deal_ids.map(async (id) => {
        return await getDealsWithReferences(parseInt(id, 10));
      })
    );

    return updatedDeals;
  } catch (error) {
    console.error('Error transferring deal owners:', error);
    throw new CustomError(
      `Failed to transfer deal ownership: ${error.message}`,
      error.statusCode || 500
    );
  }
};

module.exports = {
  createDeal,
  findDealById,
  updateDeal,
  getAllDeals,
  deleteDeal,
  transferDealOwner,
  transferDealOwner
};
