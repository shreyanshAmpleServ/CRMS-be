const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

// Create a new source
const createSource = async (data) => {
  try {
      const source = await prisma.Sources.create({
      data: {
        name: data.name,
        description: data.description || null,
        is_active: data.is_active || 'Y',
        createdby: data.createdby||1,
        log_inst: data.log_inst || 1,
      },
    });
    return source;
  } catch (error) {
    throw new CustomError(`Error creating source: ${error.message}`, 500);
  }
};

// Find a source by ID
const findSourceById = async (id) => {
  try {
    const source = await prisma.Sources.findUnique({
      where: { id: parseInt(id) },
    });
    if (!source) {
      throw new CustomError('Source not found', 404);
    }
    return source;
  } catch (error) {
    throw new CustomError(`Error finding source by ID: ${error.message}`, 503);
  }
};

// Update a source
const updateSource = async (id, data) => {
  try {
    const updatedSource = await prisma.Sources.update({
      where: { id: parseInt(id) },
      data: {
        ...data,
        updatedate: new Date(),
      },
    });
    return updatedSource;
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2003") {
        // Foreign key constraint failed
        throw new Error(
          "Cannot delete this source because related records exist. Please remove them first."
        );
      }
      if (error.code === "P2025") {
        // Record not found
        throw new Error("Record not found");
      }
    }
    throw new CustomError(`Error updating source: ${error.message}`, 500);
  }
};

// Delete a source
const deleteSource = async (id) => {
  try {
    await prisma.Sources.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    throw new CustomError(`Error deleting source: ${error.message}`, 500);
  }
};

// Get all sources
const getAllSources = async (search ,page , size,startDate,endDate,is_active) => {
  try {
    page = page || 1;
    size = size || 10;
    const skip = (page - 1) * size;

    const filters = {};

    // Handle search
    if (search) {
      filters.OR = [{ name: { contains: search.toLowerCase() } }];
    }
    if(is_active == "Y"){
      filters.is_active =  "Y"
    }
    // Handle date filtering
    // if (startDate && endDate) {
    //   const start = new Date(startDate);
    //   const end = new Date(endDate);

    //   if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
    //     filters.createdate = {
    //       gte: start,
    //       lte: end,
    //     };
    //   }
    // }
    const sources = await prisma.Sources.findMany({
      where: filters,
      skip,
      take: size,
      orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
    });
    const totalCount = await prisma.Sources.count( { where: filters});

    return  {
      data: sources,
      currentPage: page,
      size,
      totalPages: Math.ceil(totalCount / size),
      totalCount: totalCount,
    };
  } catch (error) {
    throw new CustomError("Error retrieving sources", 503);
  }
};

module.exports = {
  createSource,
  findSourceById,
  updateSource,
  deleteSource,
  getAllSources,
};
