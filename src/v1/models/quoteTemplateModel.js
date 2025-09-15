const { PrismaClient } = require("@prisma/client");
const CustomError = require("../../utils/CustomError");
const prisma = require("../../utils/prismaClient");
const {
  PrismaClientKnownRequestError,
} = require("@prisma/client/runtime/library");
const serializeItemsData = (items, parentId) => {
  const fixDecimal = (value) => {
    const num = Number(value);
    return isNaN(num) ? null : parseFloat(num.toFixed(2));
  };

  return items.map((item) => ({
    item_id: Number(item?.item_id) || 0,
    item_name: item?.item_name ?? null,
    quantity: Number(item?.quantity),
    delivered_qty: Number(item?.delivered_qty),
    unit_price: fixDecimal(item?.unit_price),
    currency: item?.currency ? Number(item.currency) : null,
    rate: fixDecimal(item?.rate),
    disc_prcnt: fixDecimal(item?.disc_prcnt),
    tax_id: item?.tax_id ? Number(item.tax_id) : null,
    tax_per: fixDecimal(item?.tax_per),
    line_tax: fixDecimal(item?.line_tax),
    total_bef_disc: fixDecimal(item?.total_bef_disc),
    total_amount: fixDecimal(item?.total_amount),
    disc_amount: fixDecimal(item?.disc_amount),
    parent_id: parentId,
  }));
};
// Create a new Template
const createQuoteTemplate = async (data) => {
  try {
    const result = await prisma.$transaction(async (prisma) => {
      // Step 1: Create the Template Master
      const createdMaster = await prisma.crms_template_master.create({
        data: {
          is_active: data?.is_active || "Y",
          template_name: data?.template_name || "",
          terms: data?.terms || "",
          createdate: new Date(),
          createdby: data.createdby,
          updatedate: new Date(),
          updatedby: null,
        },
      });

      // Step 2: Iterate over data items and create categories and their items
      for (const category of data?.data || []) {
        const createdCategory = await prisma.crms_template_category.create({
          data: {
            is_active: category?.is_active || "Y",
            category_name: category?.category_name || category?.type || "",
            type: category?.type || "",
            template_master_id: Number(createdMaster.id),
            createdate: new Date(),
            createdby: data.createdby,
            updatedate: new Date(),
            updatedby: null,
          },
        });

        for (const item of category?.items || []) {
          await prisma.crms_template_items.create({
            data: {
              description: item?.description || "",
              item_id: Number(item?.item_id) || null,
              qty: item?.qty ?? item?.quantity ?? null,
              parent_id: createdCategory.id,
              is_active: item?.is_active || "Y",
              createdate: new Date(),
              createdby: data.createdby,
              updatedate: new Date(),
              updatedby: null,
            },
          });
        }
      }

      // Step 3: Return the newly created master (you can include relations if needed)
      const orderWithDetails = await prisma.crms_template_master.findUnique({
        where: { id: createdMaster.id },
        include: {
          crms_template_category: {
            select: {
              id: true,
              template_master_id: true,
              category_name: true,
              type: true,
              is_active: true,
              crms_template_items: true,
            },
          },
        },
      });

      return orderWithDetails;
    });

    return result;
  } catch (error) {
    console.error("Transaction failed:", error);
    throw new Error("Failed to create quotation template and items");
  }
};

// Update a Template
const updateQuoteTemplate = async (templateId, data) => {
  try {
    const result = await prisma.$transaction(async (prisma) => {
      // Step 1: Update Template Master
      const updatedMaster = await prisma.crms_template_master.update({
        where: { id: Number(templateId) },
        data: {
          is_active: data?.is_active || "Y",
          template_name: data?.template_name || "",
          terms: data?.terms || "",
          updatedate: new Date(),
          updatedby: data.updatedby || null,
        },
      });

      // Step 2: Delete existing categories and items (cascade)
      const existingCategories = await prisma.crms_template_category.findMany({
        where: { template_master_id: Number(templateId) },
        select: { id: true },
      });

      const categoryIds = existingCategories.map((cat) => cat.id);

      await prisma.crms_template_items.deleteMany({
        where: {
          parent_id: {
            in: categoryIds,
          },
        },
      });

      await prisma.crms_template_category.deleteMany({
        where: {
          id: {
            in: categoryIds,
          },
        },
      });

      // Step 3: Re-create categories and items from new data
      for (const category of data?.data || []) {
        const createdCategory = await prisma.crms_template_category.create({
          data: {
            is_active: category?.is_active || "Y",
            category_name: category?.category_name || category?.type || "",
            type: category?.type || "",
            template_master_id: Number(templateId),
            createdate: new Date(),
            createdby: data.updatedby || data.createdby,
            updatedate: new Date(),
            updatedby: data.updatedby || null,
          },
        });

        for (const item of category?.items || []) {
          await prisma.crms_template_items.create({
            data: {
              description: item?.description || "",
              item_id: Number(item?.item_id) || null,
              qty: item?.qty ?? item?.quantity ?? null,
              parent_id: createdCategory.id,
              is_active: item?.is_active || "Y",
              createdate: new Date(),
              createdby: data.updatedby || data.createdby,
              updatedate: new Date(),
              updatedby: data.updatedby || null,
            },
          });
        }
      }

      // Step 4: Return updated template with relations
      const updatedWithDetails = await prisma.crms_template_master.findUnique({
        where: { id: Number(templateId) },
        include: {
          crms_template_category: {
            select: {
              id: true,
              template_master_id: true,
              category_name: true,
              type: true,
              is_active: true,
              crms_template_items: true,
            },
          },
        },
      });

      return updatedWithDetails;
    });

    return result;
  } catch (error) {
    console.error("Update transaction failed:", error);
    throw new Error("Failed to update quotation template and items");
  }
};

// Find a Template by ID
const findQuoteTemplateById = async (id) => {
  try {
    const users = await prisma.crms_d_orders.findUnique({
      where: { id: parseInt(id) },
      include: {
        order_items: true, // Include the related order items
        order_vendor: {
          select: {
            id: true,
            name: true,
            email: true,
            billing_zipcode: true,
            billing_city: true,
            country: true,
            state: true,
            billing_street: true,
          },
        },
        order_currency: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
      },
    });
    return users;
  } catch (error) {
    console.log("Error in Details of Product ", error);
    throw new CustomError(`Error finding user by ID: ${error.message}`, 503);
  }
};

// Delete a Order
const deleteQuoteTemplate = async (templateId) => {
  try {
    console.log("Delete Id ", templateId);
    const result = await prisma.$transaction(async (prisma) => {
      // Step 1: Find all related categories
      const categories = await prisma.crms_template_category.findMany({
        where: {
          template_master_id: Number(templateId),
        },
        select: { id: true },
      });

      const categoryIds = categories.map((cat) => cat.id);

      // Step 2: Delete related items
      await prisma.crms_template_items.deleteMany({
        where: {
          parent_id: {
            in: categoryIds,
          },
        },
      });

      // Step 3: Delete categories
      await prisma.crms_template_category.deleteMany({
        where: {
          id: {
            in: categoryIds,
          },
        },
      });

      // Step 4: Delete the template master
      await prisma.crms_template_master.delete({
        where: {
          id: Number(templateId),
        },
      });

      return {
        success: true,
        message: "Template and related data deleted successfully",
      };
    });

    return result;
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2003") {
        // Foreign key constraint failed
        throw new Error(
          "Cannot delete this quotation template because related records exist. Please remove them first."
        );
      }
      if (error.code === "P2025") {
        // Record not found
        throw new Error("Record not found");
      }
    }
    throw new Error("Failed to delete quotation template and its related data");
  }
};

const getAllQuoteTemplate = async (search, page, size, startDate, endDate) => {
  try {
    page = page || 1;
    size = size || 10;
    const skip = (page - 1) * size;
    const filters = {};
    // Handle search
    if (search) {
      filters.OR = [
        {
          crms_template_category: {
            category_name: { contains: search.toLowerCase() },
          },
        },

        {
          template_name: { contains: search.toLowerCase() },
        },
      ];
    }
    // Handle date filtering
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        filters.createdate = {
          gte: start,
          lte: end,
        };
      }
    }
    const orders = await prisma.crms_template_master.findMany({
      where: filters,
      skip,
      take: size,
      include: {
        crms_template_category: {
          select: {
            id: true,
            template_master_id: true,
            category_name: true,
            type: true,
            is_active: true,
            crms_template_items: true,
          },
        },
      },
      orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
    });

    const totalCount = await prisma.crms_template_master.count();

    return {
      data: orders,
      currentPage: page,
      size,
      totalPages: Math.ceil(totalCount / size),
      totalCount: totalCount,
    };
  } catch (error) {
    console.log("Error Order Modal : ", error);
    throw new CustomError("Error retrieving order", 503);
  }
};

module.exports = {
  createQuoteTemplate,
  findQuoteTemplateById,
  updateQuoteTemplate,
  deleteQuoteTemplate,
  getAllQuoteTemplate,
};
