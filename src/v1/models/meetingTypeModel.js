const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

// Create a new meeting type
const createMeetingType = async (data) => {
    try {
        const meetingType = await prisma.crms_m_meetingtype.create({
            data: {
                name: data.name,
                description: data.description || null,
                is_active: data.is_active || 'Y',
                createdby: data.createdby || 1,
                log_inst: data.log_inst || 1,
            },
        });
        return meetingType;
    } catch (error) {
        throw new CustomError(`Error creating meeting type: ${error.message}`, 500);
    }
};

// Find a meeting type by ID
const findMeetingTypeById = async (id) => {
    try {
        const meetingType = await prisma.crms_m_meetingtype.findUnique({
            where: { id: parseInt(id) },
        });
        if (!meetingType) {
            throw new CustomError('Meeting type not found', 404);
        }
        return meetingType;
    } catch (error) {
        throw new CustomError(`Error finding meeting type by ID: ${error.message}`, 503);
    }
};

// Update a meeting type
const updateMeetingType = async (id, data) => {
    try {
        const updatedMeetingType = await prisma.crms_m_meetingtype.update({
            where: { id: parseInt(id) },
            data: {
                ...data,
                updatedate: new Date(),
            },
        });
        return updatedMeetingType;
    } catch (error) {
        throw new CustomError(`Error updating meeting type: ${error.message}`, 500);
    }
};

// Delete a meeting type
const deleteMeetingType = async (id) => {
    try {
        await prisma.crms_m_meetingtype.delete({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2003") {
              // Foreign key constraint failed
              throw new Error(
                "Cannot delete this meeting type because related records exist. Please remove them first."
              );
            }
            if (error.code === "P2025") {
              // Record not found
              throw new Error("Record not found");
            }
          }
        throw new CustomError(`Error deleting meeting type: ${error.message}`, 500);
    }
};

// Get all meeting types
// Get all meeting types
const getAllMeetingTypes = async (is_active,search ,page , size,startDate,endDate) => {
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
      const meetingTypes = await prisma.crms_m_meetingtype.findMany({
        where: filters,
        skip,
        take: size,
        orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
      });
      const totalCount = await prisma.crms_m_meetingtype.count( { where: filters});
  
      return  {
        data: meetingTypes,
        currentPage: page,
        size,
        totalPages: Math.ceil(totalCount / size),
        totalCount: totalCount,
      };
    } catch (error) {
      throw new CustomError("Error retrieving meeting types", 503);
    }
  };

module.exports = {
    createMeetingType,
    findMeetingTypeById,
    updateMeetingType,
    deleteMeetingType,
    getAllMeetingTypes,
};
