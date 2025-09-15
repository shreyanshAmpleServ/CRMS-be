const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

// Create a new call purpose
const createCallPurpose = async (data) => {
    try {
        const callPurpose = await prisma.crms_m_callpurpose.create({
            data: {
                name: data.name,
                description: data.description || null,
                is_active: data.is_active || 'Y',
                createdby: data.createdby || 1,
                log_inst: data.log_inst || 1,
            },
        });
        return callPurpose;
    } catch (error) {
        throw new CustomError(`Error creating call purpose: ${error.message}`, 500);
    }
};

// Find a call purpose by ID
const findCallPurposeById = async (id) => {
    try {
        const callPurpose = await prisma.crms_m_callpurpose.findUnique({
            where: { id: parseInt(id) },
        });
        if (!callPurpose) {
            throw new CustomError('Call purpose not found', 404);
        }
        return callPurpose;
    } catch (error) {
        throw new CustomError(`Error finding call purpose by ID: ${error.message}`, 503);
    }
};

// Update a call purpose
const updateCallPurpose = async (id, data) => {
    try {
        const updatedCallPurpose = await prisma.crms_m_callpurpose.update({
            where: { id: parseInt(id) },
            data: {
                ...data,
                updatedate: new Date(),
            },
        });
        return updatedCallPurpose;
    } catch (error) {
        throw new CustomError(`Error updating call purpose: ${error.message}`, 500);
    }
};

// Delete a call purpose
const deleteCallPurpose = async (id) => {
    try {
        await prisma.crms_m_callpurpose.delete({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2003") {
              // Foreign key constraint failed
              throw new Error(
                "Cannot delete this call purpose because related records exist. Please remove them first."
              );
            }
            if (error.code === "P2025") {
              // Record not found
              throw new Error("Record not found");
            }
          }
        throw new CustomError(`Error deleting call purpose: ${error.message}`, 500);
    }
};

// Get all call purposes
const getAllCallPurposes = async (is_active,search ,page , size,startDate,endDate) => {
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
      const callPurpose = await prisma.crms_m_callpurpose.findMany({
        where: filters,
        skip,
        take: size,
        orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
      });
      const totalCount = await prisma.crms_m_callpurpose.count( { where: filters});
  
      return  {
        data: callPurpose,
        currentPage: page,
        size,
        totalPages: Math.ceil(totalCount / size),
        totalCount: totalCount,
      };
    } catch (error) {
      throw new CustomError("Error retrieving call purposes", 503);
    }
  };

module.exports = {
    createCallPurpose,
    findCallPurposeById,
    updateCallPurpose,
    deleteCallPurpose,
    getAllCallPurposes,
};
