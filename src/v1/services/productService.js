const productModal = require('../models/productModal');

const createProduct = async (data) => {
    return await productModal.createProduct(data);
};

const findProductById = async (id) => {
    return await productModal.findProductById(id);
};

const updateProduct = async (id, data) => {
    return await productModal.updateProduct(id, data);
};

const deleteProduct = async (id) => {
    return await productModal.deleteProduct(id);
};

const getAllProduct = async (search ,page , size ,startDate,endDate,dataFilter) => {
    return await productModal.getAllProduct(search,page , size ,startDate,endDate,dataFilter);
};
const generateProductCode = async () => {
    return await productModal.generateProductCode();
};

module.exports = {
    createProduct,
    findProductById,
    updateProduct,
    deleteProduct,
    getAllProduct,
    generateProductCode,
};
