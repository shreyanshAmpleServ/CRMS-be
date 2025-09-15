const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

// Create a new Category
const createProductCategory = async (data) => {
    try {
        const Category = await prisma.crms_m_product_category.create({
            data: {
                name: data.name,
                // description: data.description || null,
                is_active: data.is_active || 'Y',
                createdby: data.createdby || 1,
                log_inst: data.log_inst || 1,
            },
        });
        return Category;
    } catch (error) {
        throw new CustomError(`Error creating Category: ${error.message}`, 500);
    }
};

// Find an Category by ID
const findCategoryById = async (id) => {
    try {
        const Category = await prisma.crms_m_product_category.findUnique({
            where: { id: parseInt(id) },
        });
        if (!Category) {
            throw new CustomError('Category not found', 404);
        }
        return Category;
    } catch (error) {
        throw new CustomError(`Error finding Category by ID: ${error.message}`, 503);
    }
};

// Update an Category
const updateProductCategory = async (id, data) => {
    try {
        const updatedCategory = await prisma.crms_m_product_category.update({
            where: { id: parseInt(id) },
            data: {
                ...data,
                updatedate: new Date(),
            },
        });
        return updatedCategory;
    } catch (error) {
        throw new CustomError(`Error updating Category: ${error.message}`, 500);
    }
};

// Delete an Category
const deleteProductCategory = async (id) => {
    try {
        await prisma.crms_m_product_category.delete({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2003") {
              // Foreign key constraint failed
              throw new Error(
                "Cannot delete this product category because related records exist. Please remove them first."
              );
            }
            if (error.code === "P2025") {
              // Record not found
              throw new Error("Record not found");
            }
          }
        throw new CustomError(`Error deleting Category: ${error.message}`, 500);
    }
};

// Get all crms_m_product_category
const getAllProductCategory = async (is_active,search, page, size, startDate, endDate) => {
    try {
      page = page || 1;
      size = size || 10;
      const skip = (page - 1) * size;
  
      const filters = {};
  
      // Handle search
      if (search) {
        filters.OR = [{ name: { contains: search.toLowerCase() } }];
      }
      if(is_active){
        filters.is_active =  { equals: is_active }
      }
      const productCategory = await prisma.crms_m_product_category.findMany({
        where: filters,
        skip,
        take: size,
        orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
      });
      const totalCount = await prisma.crms_m_product_category.count( { where: filters});
  
      return  {
        data: productCategory,
        currentPage: page,
        size,
        totalPages: Math.ceil(totalCount / size),
        totalCount: totalCount,
      };
    } catch (error) {
      console.log("error ",error)
      throw new CustomError(`Error retrieving product category:${error}`, 503);
    }
  };
module.exports = {
    createProductCategory,
    findCategoryById,
    updateProductCategory,
    deleteProductCategory,
    getAllProductCategory,
};
