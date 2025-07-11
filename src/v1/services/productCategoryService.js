const productCategoryModel = require('../models/ProductCategoryModel');

const createProductCategory = async (data) => {
    return await productCategoryModel.createProductCategory(data);
};

const findCategoryById = async (id) => {
    return await productCategoryModel.findCategoryById(id);
};

const updateProductCategory = async (id, data) => {
    return await productCategoryModel.updateProductCategory(id, data);
};

const deleteProductCategory = async (id) => {
    return await productCategoryModel.deleteProductCategory(id);
};

const getAllProductCategory = async (search,dataFilter) => {
    return await productCategoryModel.getAllProductCategory(search,dataFilter);
};

module.exports = {
    createProductCategory,
    findCategoryById,
    updateProductCategory,
    deleteProductCategory,
    getAllProductCategory,
};
