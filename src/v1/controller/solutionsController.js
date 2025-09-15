const solutionsService = require('../services/solutionsService');
const CustomError = require('../../utils/CustomError');
const moment = require("moment");

const sanitizeSolutionData = (data) => {
  const {product_id,solution_owner,solution_owner_name,...datas} = data
  const solution=  {
        ...datas,
        // product_id: Number(datas?.product_id) || null,
        // solution_owner: datas.solution_owner ? Number(datas.solution_owner) : null,
        is_active: datas.is_active || "Y",
        log_inst: datas.log_inst || 1,
  };
  if (solution_owner) {
    solution.solution_user_owner = {
      connect: { id: Number(solution_owner) },
    };
  }
  if (product_id) {
    solution.solution_product = {
      connect: { id: Number(product_id) },
    };
  }
  return solution
};

const createSolutions = async (req, res, next) => {
  try {
    let SolutionData = { ...req.body };
    SolutionData = sanitizeSolutionData( SolutionData); // Sanitize the solutions data and handle company icon

    const solutions = await solutionsService.createSolutions({...SolutionData,createdby:Number(req.user.id)});
    res.status(201).success('solution created successfully', solutions);
  } catch (error) {
    next(error);
  }
};

const findSolutionById = async (req, res, next) => {
  try {
    const solutions = await solutionsService.findSolutionById(req.params.id);
    if (!solutions) throw new CustomError('solution not found', 404);
    res.status(200).success(null, solutions);
  } catch (error) {
    next(error);
  }
};

const updateSolutions = async (req, res, next) => {
  try {

    const { id, ...datas } = req.body
    SolutionData = sanitizeSolutionData(datas); // Sanitize the solutions data and handle company icon

    const solutions = await solutionsService.updateSolutions(req.params.id, {...SolutionData,updatedby:req.user.id});
    res.status(200).success('solution updated successfully', solutions);
  } catch (error) {
    next(error);
  }
};

const deleteSolution = async (req, res, next) => {
  try {
    await solutionsService.deleteSolution(req.params.id);
    res.status(200).success('solution deleted successfully', null);
  } catch (error) {
    next(error);
  }
};

const getAllSolution = async (req, res, next) => {
  try {
    const { page , size , search ,startDate,endDate,dataFilter  } = req.query;
    const solutions = await solutionsService.getAllSolution(search ,Number(page), Number(size) ,startDate && moment(startDate),endDate && moment(endDate),dataFilter);
    res.status(200).success(null, solutions);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createSolutions,
  findSolutionById,
  updateSolutions,
  deleteSolution,
  getAllSolution,
};
