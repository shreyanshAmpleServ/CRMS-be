const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

// Create a new industry
const createIndustry = async (data) => {
    try {
        const industry = await prisma.Industries.create({
            data: {
                name: data.name,
                description: data.description || null,
                is_active: data.is_active || 'Y',
                createdby: data.createdby || 1,
                log_inst: data.log_inst || 1,
            },
        });
        return industry;
    } catch (error) {
        throw new CustomError(`Error creating industry: ${error.message}`, 500);
    }
};

// Find an industry by ID
const findIndustryById = async (id) => {
    try {
        const industry = await prisma.Industries.findUnique({
            where: { id: parseInt(id) },
        });
        if (!industry) {
            throw new CustomError('Industry not found', 404);
        }
        return industry;
    } catch (error) {
        throw new CustomError(`Error finding industry by ID: ${error.message}`, 503);
    }
};

// Update an industry
const updateIndustry = async (id, data) => {
    try {
        const updatedIndustry = await prisma.Industries.update({
            where: { id: parseInt(id) },
            data: {
                ...data,
                updatedate: new Date(),
            },
        });
        return updatedIndustry;
    } catch (error) {
        throw new CustomError(`Error updating industry: ${error.message}`, 500);
    }
};

// Delete an industry
const deleteIndustry = async (id) => {
    try {
        await prisma.Industries.delete({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2003") {
              // Foreign key constraint failed
              throw new Error(
                "Cannot delete this industry because related records exist. Please remove them first."
              );
            }
            if (error.code === "P2025") {
              // Record not found
              throw new Error("Record not found");
            }
          }
        throw new CustomError(`Error deleting industry: ${error.message}`, 500);
    }
};

// Get all industries
const getAllIndustries = async (is_active,search ,page , size,startDate,endDate) => {
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
        const industries = await prisma.Industries.findMany({
          where: filters,
          skip,
          take: size,
          orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
        }); 
        const totalCount = await prisma.Industries.count( { where: filters});
    
        return  {
          data: industries,
          currentPage: page,
          size,
          totalPages: Math.ceil(totalCount / size),
          totalCount: totalCount,
        };
      } catch (error) {
        throw new CustomError("Error retrieving industries", 503);
      }
};

module.exports = {
    createIndustry,
    findIndustryById,
    updateIndustry,
    deleteIndustry,
    getAllIndustries,
};
