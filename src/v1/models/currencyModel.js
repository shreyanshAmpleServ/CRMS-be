// Currency Model
const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

const createCurrency = async (data) => {
    try {
        if (data.is_default == "Y") {
            await prisma.Currency.updateMany({
              where: { is_default: "Y" },
              data: { is_default: "N" },
            });
          }
        const currency = await prisma.Currency.create({
            data: {
                name: data.name,
                icon: data.icon || null,
                is_default: data.is_default || false,
                code: data.code,
                is_active: data.is_active || 'Y',
                createdby: data.createdby || 1,
                log_inst: data.log_inst || 1,
            },
        });
        return currency;
    } catch (error) {
        throw new CustomError(`Error creating currency: ${error.message}`, 500);
    }
};

const findCurrencyById = async (id) => {
    try {
        const currency = await prisma.Currency.findUnique({
            where: { id: parseInt(id) },
        });
        if (!currency) {
            throw new CustomError('Currency not found', 404);
        }
        return currency;
    } catch (error) {
        throw new CustomError(`Error finding currency by ID: ${error.message}`, 503);
    }
};

const updateCurrency = async (id, data) => {
    try {
        if (data.is_default == "Y") {
            await prisma.Currency.updateMany({
              where: { is_default: "Y" },
              data: { is_default: "N" },
            });
          }
        const updatedCurrency = await prisma.Currency.update({
            where: { id: parseInt(id) },
            data: {
                ...data,
                updatedate: new Date(),
            },
        });
        return updatedCurrency;
    } catch (error) {
        throw new CustomError(`Error updating currency: ${error.message}`, 500);
    }
};

const deleteCurrency = async (id) => {
    try {
        await prisma.Currency.delete({
            where: { id: parseInt(id) },
        });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2003") {
          // Foreign key constraint failed
          throw new Error(
            "Cannot delete this currency because related records exist. Please remove them first."
          );
        }
        if (error.code === "P2025") {
          // Record not found
          throw new Error("Record not found");
        }
      }
        throw new CustomError(`Error deleting currency: ${error.message}`, 500);
    }
};

const getAllCurrency = async (is_active,search ,page , size,startDate,endDate) => {
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
  
      const Currency = await prisma.Currency.findMany({
        where: filters,
        skip,
        take: size,
        orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
      });
      const totalCount = await prisma.Currency.count( { where: filters});
  
      return  {
        data: Currency,
        currentPage: page,
        size,
        totalPages: Math.ceil(totalCount / size),
        totalCount: totalCount,
      };
    } catch (error) {
      throw new CustomError("Error retrieving Currency", 503);
    }
  };

module.exports = {
    createCurrency,
    findCurrencyById,
    updateCurrency,
    deleteCurrency,
    getAllCurrency,
};