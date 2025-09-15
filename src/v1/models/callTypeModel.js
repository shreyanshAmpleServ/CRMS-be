const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

// Create a new call type
const createCallType = async (data) => {
    try {
        const callType = await prisma.crms_m_calltype.create({
            data: {
                name: data.name,
                description: data.description || null,
                is_active: data.is_active || 'Y',
                createdby: data.createdby || 1,
                log_inst: data.log_inst || 1,
            },
        });
        return callType;
    } catch (error) {
        throw new CustomError(`Error creating call type: ${error.message}`, 500);
    }
};

// Find a call type by ID
const findCallTypeById = async (id) => {
    try {
        const callType = await prisma.crms_m_calltype.findUnique({
            where: { id: parseInt(id) },
        });
        if (!callType) {
            throw new CustomError('Call type not found', 404);
        }
        return callType;
    } catch (error) {
        throw new CustomError(`Error finding call type by ID: ${error.message}`, 503);
    }
};

// Update a call type
const updateCallType = async (id, data) => {
    try {
        const updatedCallType = await prisma.crms_m_calltype.update({
            where: { id: parseInt(id) },
            data: {
                ...data,
                updatedate: new Date(),
            },
        });
        return updatedCallType;
    } catch (error) {
        throw new CustomError(`Error updating call type: ${error.message}`, 500);
    }
};

// Delete a call type
const deleteCallType = async (id) => {
    try {
        await prisma.crms_m_calltype.delete({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2003") {
              // Foreign key constraint failed
              throw new Error(
                "Cannot delete this call type because related records exist. Please remove them first."
              );
            }
            if (error.code === "P2025") {
              // Record not found
              throw new Error("Record not found");
            }
          }
        throw new CustomError(`Error deleting call type: ${error.message}`, 500);
    }
};

// Get all call types
const getAllCallTypes = async (is_active,search ,page , size,startDate,endDate) => {
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
      const callTypes = await prisma.crms_m_calltype.findMany({
        where: filters,
        skip,
        take: size,
        orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
      });
      const totalCount = await prisma.crms_m_calltype.count( { where: filters});
  
      return  {
        data: callTypes,
        currentPage: page,
        size,
        totalPages: Math.ceil(totalCount / size),
        totalCount: totalCount,
      };
    } catch (error) {
      throw new CustomError("Error retrieving call types", 503);
    }
  };
  

module.exports = {
    createCallType,
    findCallTypeById,
    updateCallType,
    deleteCallType,
    getAllCallTypes,
};
