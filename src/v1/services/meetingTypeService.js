const meetingTypeModel = require('../models/meetingTypeModel');

const createMeetingType = async (data) => {
    return await meetingTypeModel.createMeetingType(data);
};

const findMeetingTypeById = async (id) => {
    return await meetingTypeModel.findMeetingTypeById(id);
};

const updateMeetingType = async (id, data) => {
    return await meetingTypeModel.updateMeetingType(id, data);
};

const deleteMeetingType = async (id) => {
    return await meetingTypeModel.deleteMeetingType(id);
};

const getAllMeetingTypes = async (is_active,search ,page , size,startDate,endDate) => {
    return await meetingTypeModel.getAllMeetingTypes(is_active,search ,page , size,startDate,endDate);
};

module.exports = {
    createMeetingType,
    findMeetingTypeById,
    updateMeetingType,
    deleteMeetingType,
    getAllMeetingTypes,
};
