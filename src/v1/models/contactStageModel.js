const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

// Create a new contact stage
const createContactStage = async (data) => {
    try {
        const contactStage = await prisma.ContactStages.create({
            data: {
                name: data.name,
                description: data.description || null,
                is_active: data.is_active || 'Y',
                createdby: data.createdby || 1,
                log_inst: data.log_inst || 1,
            },
        });
        return contactStage;
    } catch (error) {
        throw new CustomError(`Error creating contact stage: ${error.message}`, 500);
    }
};

// Find a contact stage by ID
const findContactStageById = async (id) => {
    try {
        const contactStage = await prisma.ContactStages.findUnique({
            where: { id: parseInt(id) },
        });
        if (!contactStage) {
            throw new CustomError('Contact stage not found', 404);
        }
        return contactStage;
    } catch (error) {
        throw new CustomError(`Error finding contact stage by ID: ${error.message}`, 503);
    }
};

// Update a contact stage
const updateContactStage = async (id, data) => {
    try {
        const updatedContactStage = await prisma.ContactStages.update({
            where: { id: parseInt(id) },
            data: {
                ...data,
                updatedate: new Date(),
            },
        });
        return updatedContactStage;
    } catch (error) {
        throw new CustomError(`Error updating contact stage: ${error.message}`, 500);
    }
};

// Delete a contact stage
const deleteContactStage = async (id) => {
    try {
        await prisma.ContactStages.delete({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2003") {
              // Foreign key constraint failed
              throw new Error(
                "Cannot delete this contact stage because related records exist. Please remove them first."
              );
            }
            if (error.code === "P2025") {
              // Record not found
              throw new Error("Record not found");
            }
          }
        throw new CustomError(`Error deleting contact stage: ${error.message}`, 500);
    }
};

// Get all contact stages
const getAllContactStages = async (is_active,search ,page , size,startDate,endDate) => {
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
        const contactStages = await prisma.ContactStages.findMany({
          where: filters,
          skip,
          take: size,
          orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
        });
        const totalCount = await prisma.ContactStages.count( { where: filters});
    
        return  {
          data: contactStages,
          currentPage: page,
          size,
          totalPages: Math.ceil(totalCount / size),
          totalCount: totalCount,
        };
      } catch (error) {
        throw new CustomError("Error retrieving contact stages", 503);
      }
};

module.exports = {
    createContactStage,
    findContactStageById,
    updateContactStage,
    deleteContactStage,
    getAllContactStages,
};
