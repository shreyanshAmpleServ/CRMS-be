const roleModel = require('../models/roleModel');

const createRole = async (data) => {
  return await roleModel.createRole(data);
};

const findRoleById = async (id) => {
  return await roleModel.findRoleById(id);
};

const updateRole = async (id, data) => {
  return await roleModel.updateRole(id, data);
};

const deleteRole = async (id) => {
  return await roleModel.deleteRole(id);
};

const getAllRoles = async (is_active,search, page, size, startDate, endDate) => {
  return await roleModel.getAllRoles(is_active,search, page, size, startDate, endDate);
};

module.exports = {
  createRole,
  findRoleById,
  updateRole,
  deleteRole,
  getAllRoles,
};
