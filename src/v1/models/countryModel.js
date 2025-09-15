const { PrismaClient } = require('@prisma/client');
const CustomError = require('../../utils/CustomError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

const createCountry = async (data) => {
  try {
    const country = await prisma.Country.create({
      data: {
        ...data,
        name: data.name,
        is_active: data.is_active || 'Y',
        createdby: data.createdby || 1,
        log_inst: data.log_inst || 1,
        createdate:new Date(),
        updatedate: new Date(),
        updatedby:1,
      },
    });
    return country;
  } catch (error) {
    console.log("Create Country ",error)
    throw new CustomError(`Error creating country: ${error.message}`, 500);
  }
};

const findCountryById = async (id) => {
  try {
    const country = await prisma.Country.findUnique({
      where: { id: parseInt(id) },
    });
    if (!country) {
      throw new CustomError('Country not found', 404);
    }
    return country;
  } catch (error) {
    console.log("Country By Id  ",error)
    throw new CustomError(`Error finding country by ID: ${error.message}`, 503);
  }
};

const updateCountry = async (id, data) => {
  try {
    const updatedCountry = await prisma.Country.update({
      where: { id: parseInt(id) },
      data: {
        ...data,
        updatedate: new Date(),
      },
    });
    return updatedCountry;
  } catch (error) {
    throw new CustomError(`Error updating country: ${error.message}`, 500);
  }
};

const deleteCountry = async (id) => {
  try {
    await prisma.Country.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2003") {
        // Foreign key constraint failed
        throw new Error(
          "Cannot delete this country because related records exist. Please remove them first."
        );
      }
      if (error.code === "P2025") {
        // Record not found
        throw new Error("Record not found");
      }
    }
    throw new CustomError(`Error deleting country: ${error.message}`, 500);
  }
};

const getAllCountries = async (is_active ,search ,page , size,startDate,endDate) => {
  try {
    page = page || 1;
    size = size || 10;
    const skip = (page - 1) * size;

    const filters = {};
    if (search) {
      filters.OR = [{ name: { contains: search.toLowerCase() } }];
    }
    if(is_active){
      filters.is_active =  { equals: is_active }
    }
    const countries = await prisma.Country.findMany({
      where: filters,
      skip,
      take: size,
      orderBy: [
        { name: "asc" },
        // { updatedate: 'desc' },
        // { createdate: 'desc' },
      ],
    });
    const totalCount = await prisma.Country.count( { where: filters});

    return  {
      data: countries,
      currentPage: page,
      size,
      totalPages: Math.ceil(totalCount / size),
      totalCount: totalCount,
    };
  } catch (error) {
    console.log("Country ", error);
    throw new CustomError("Error retrieving countries", 503);
  }
};

module.exports = {
  createCountry,
  findCountryById,
  updateCountry,
  deleteCountry,
  getAllCountries,
};