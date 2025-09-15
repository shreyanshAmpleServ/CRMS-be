const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

// Create a new call status
const createCallStatus = async (data) => {
    try {
        const callStatus = await prisma.CallStatuses.create({
            data: {
                name: data.name,
                description: data.description || null,
                is_active: data.is_active || 'Y',
                createdby: data.createdby || 1,
                log_inst: data.log_inst || 1,
            },
        });
        return callStatus;
    } catch (error) {
        throw new CustomError(`Error creating call status: ${error.message}`, 500);
    }
};

// Find a call status by ID
const findCallStatusById = async (id) => {
    try {
        const callStatus = await prisma.CallStatuses.findUnique({
            where: { id: parseInt(id) },
        });
        if (!callStatus) {
            throw new CustomError('Call status not found', 404);
        }
        return callStatus;
    } catch (error) {
        throw new CustomError(`Error finding call status by ID: ${error.message}`, 503);
    }
};

// Update a call status
const updateCallStatus = async (id, data) => {
    try {
        const updatedCallStatus = await prisma.CallStatuses.update({
            where: { id: parseInt(id) },
            data: {
                ...data,
                updatedate: new Date(),
            },
        });
        return updatedCallStatus;
    } catch (error) {
        throw new CustomError(`Error updating call status: ${error.message}`, 500);
    }
};

// Delete a call status
const deleteCallStatus = async (id) => {
    try {
        await prisma.CallStatuses.delete({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        console.log("Error to delete Calls status",error)
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2003") {
              // Foreign key constraint failed
              throw new Error(
                "Cannot delete this call status because related records exist. Please remove them first."
              );
            }
            if (error.code === "P2025") {
              // Record not found
              throw new Error("Record not found");
            }
          }
        throw new CustomError(`Error deleting call status: ${error.message}`, 500);
    }
};

// Get all call statuses
const getAllCallStatuses = async (is_active,search ,page , size,startDate,endDate) => {
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
      const callStatuses = await prisma.CallStatuses.findMany({
        where: filters,
        skip,
        take: size,
        orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
      });
      const totalCount = await prisma.CallStatuses.count( { where: filters});
  
      return  {
        data: callStatuses,
        currentPage: page,
        size,
        totalPages: Math.ceil(totalCount / size),
        totalCount: totalCount,
      };
    } catch (error) {
      throw new CustomError("Error retrieving call statuses", 503);
    }
  };

module.exports = {
    createCallStatus,
    findCallStatusById,
    updateCallStatus,
    deleteCallStatus,
    getAllCallStatuses,
};
