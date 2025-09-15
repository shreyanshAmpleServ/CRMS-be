const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

// Create a new lead status
const createLostReason = async (data) => {
    try {
        const lostReason = await prisma.LostReasons.create({
            data: {
                name: data.name,
                order: data.order || null,
                description: data.description || null,
                colorCode: data.colorCode || null,
                is_active: data.is_active || 'Y',
                createdby: data.createdby || 1,
                log_inst: data.log_inst || 1,
            },
        });
        return lostReason;
    } catch (error) {
        throw new CustomError(`Error creating lead status: ${error.message}`, 500);
    }
};

// Find a lead status by ID
const findLostReasonById = async (id) => {
    try {
        const lostReason = await prisma.LostReasons.findUnique({
            where: { id: parseInt(id) },
        });
        if (!lostReason) {
            throw new CustomError('Lead status not found', 404);
        }
        return lostReason;
    } catch (error) {
        throw new CustomError(`Error finding lead status by ID: ${error.message}`, 503);
    }
};

// Update a lead status
const updateLostReason = async (id, data) => {
    try {
        const updatedLostReason = await prisma.LostReasons.update({
            where: { id: parseInt(id) },
            data: {
                ...data,
                updatedate: new Date(),
            },
        });
        return updatedLostReason;
    } catch (error) {
        throw new CustomError(`Error updating lead status: ${error.message}`, 500);
    }
};

// Delete a lead status
const deleteLostReason = async (id) => {
    try {
        await prisma.LostReasons.delete({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2003") {
              // Foreign key constraint failed
              throw new Error(
                "Cannot delete this lead status because related records exist. Please remove them first."
              );
            }
            if (error.code === "P2025") {
              // Record not found
              throw new Error("Record not found");
            }
          }
        throw new CustomError(`Error deleting lead status: ${error.message}`, 500);
    }
};

// Get all lead statuss
const getAllLostReasons = async (is_active,search ,page , size,startDate,endDate) => {
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
    const lostReasons = await prisma.LostReasons.findMany({
      where: filters,
      skip,
      take: size,
      orderBy: [
        { order: "asc" },
        { updatedate: "desc" },
        { createdate: "desc" },
      ],
    });
    const totalCount = await prisma.LostReasons.count( { where: filters});

    return  {
      data: lostReasons,
      currentPage: page,
      size,
      totalPages: Math.ceil(totalCount / size),
      totalCount: totalCount,
    };
  } catch (error) {
    throw new CustomError("Error retrieving lead statuss", 503);
  }
};

module.exports = {
    createLostReason,
    findLostReasonById,
    updateLostReason,
    deleteLostReason,
    getAllLostReasons,
};
