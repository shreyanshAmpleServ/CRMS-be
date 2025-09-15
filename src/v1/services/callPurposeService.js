const callPurposesModel = require('../models/callPurposesModel');

const createCallPurpose = async (data) => {
    return await callPurposesModel.createCallPurpose(data);
};

const findCallPurposeById = async (id) => {
    return await callPurposesModel.findCallPurposeById(id);
};

const updateCallPurpose = async (id, data) => {
    return await callPurposesModel.updateCallPurpose(id, data);
};

const deleteCallPurpose = async (id) => {
    return await callPurposesModel.deleteCallPurpose(id);
};

const getAllCallPurposes = async (is_active,search ,page , size,startDate,endDate) => {
    return await callPurposesModel.getAllCallPurposes(is_active,search ,page , size,startDate,endDate);
};

module.exports = {
    createCallPurpose,
    findCallPurposeById,
    updateCallPurpose,
    deleteCallPurpose,
    getAllCallPurposes,
};
