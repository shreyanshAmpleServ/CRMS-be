const callTypeModel = require('../models/callTypeModel');

const createCallType = async (data) => {
    return await callTypeModel.createCallType(data);
};

const findCallTypeById = async (id) => {
    return await callTypeModel.findCallTypeById(id);
};

const updateCallType = async (id, data) => {
    return await callTypeModel.updateCallType(id, data);
};

const deleteCallType = async (id) => {
    return await callTypeModel.deleteCallType(id);
};

const getAllCallTypes = async (dataFilter) => {
    return await callTypeModel.getAllCallTypes(dataFilter);
};

module.exports = {
    createCallType,
    findCallTypeById,
    updateCallType,
    deleteCallType,
    getAllCallTypes,
};
