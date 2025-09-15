const { PrismaClient } = require("@prisma/client");
const CustomError = require("../../utils/CustomError");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime/library");
const prisma = new PrismaClient();

// Create a new tax
const createTaxSetup = async (data) => {
  try {
    console.log("Create Tax setUp : ", data)
    // Create the tax
    const tax = await prisma.crms_m_tax_setup.create({
      data: {
        ...data,
        account_id : Number(data?.account_id) || null,
        is_active: data.is_active || "Y",
        log_inst: data.log_inst || 1,
        createdate: new Date(),
        updatedate: new Date(),
        updatedby: data.createdby || 1,
        createdby: data.createdby || 1,
      },
      // include:{
      //   Account:{
      //     select:{
      //       firstName:true,
      //       lastName:true,
      //       id:true
      //     }
      //   },
      // },
    });
    return tax;
  } catch (error) {
    console.log("Error tax SetUp Modal Create : ", error)
    throw new CustomError(`Error creating tax: ${error.message}`, 500);
  }
};

// Update a tax
const updateTaxSetup = async (id, data) => {
  try {const updatedTax = await prisma.crms_m_tax_setup.update({
      where: { id: parseInt(id) },
      data: {
        ...data,
        account_id : Number(data?.account_id),
        updatedate:new Date(),
        updatedby: data.updatedby || 1,
      },
      // include:{
      //   Account:{
      //     select:{
      //       firstName:true,
      //       lastName:true,
      //       id:true
      //     }
      //   },
       
      // },
    });

    return updatedTax;
  } catch (error) {
    console.log("tax Update error : ", error);
    throw new CustomError(`Error updating tax: ${error.message}`, 500);
  }
};

// Find a tax by ID and include role
const findTaxSetupById = async (id) => {
  try {
    const tax = await prisma.crms_m_tax_setup.findUnique({
      where:{ id: parseInt(id)},
      // include:{
      //   Account:{
      //     select:{
      //       firstName:true,
      //       lastName:true,
      //       id:true
      //     }
      //   },
       
      // },
     
    });
    return tax;
  } catch (error) {
    console.log("Error in Details of tax ", error)
    throw new CustomError(`Error finding tax by ID: ${error.message}`, 503);
  }
};

// Delete a tax
const deleteSetup = async (id) => {
  try {

    await prisma.crms_m_tax_setup.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2003") {
        // Foreign key constraint failed
        throw new Error(
          "Cannot delete this tax setup because related records exist. Please remove them first."
        );
      }
      if (error.code === "P2025") {
        // Record not found
        throw new Error("Record not found");
      }
    }
    throw new CustomError(`Error deleting tax: ${error.message}`, 500);
  }
};

// Get all taxs and include their roles
const getAllTaxSetup = async (is_active,search, page, size, startDate, endDate) => {
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
    const taxs = await prisma.crms_m_tax_setup.findMany({
      where: filters,
      skip,
      take: size,
      orderBy: [{ updatedate: "desc" }, { createdate: "desc" }],
    });
    const totalCount = await prisma.crms_m_tax_setup.count( { where: filters});

    return  {
      data: taxs,
      currentPage: page,
      size,
      totalPages: Math.ceil(totalCount / size),
      totalCount: totalCount,
    };
  } catch (error) {
    throw new CustomError("Error retrieving Taxs", 503);
  }
};
module.exports = {
  createTaxSetup,
  findTaxSetupById,
  updateTaxSetup,
  deleteSetup,
  getAllTaxSetup,
};
