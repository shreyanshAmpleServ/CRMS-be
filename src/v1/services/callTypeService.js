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

const getAllCallTypes = async (is_active,search ,page , size,startDate,endDate) => {
    return await callTypeModel.getAllCallTypes(is_active,search ,page , size,startDate,endDate);
};

module.exports = {
    createCallType,
    findCallTypeById,
    updateCallType,
    deleteCallType,
    getAllCallTypes,
};
