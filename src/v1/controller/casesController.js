const casesService = require('../services/casesService');
const CustomError = require('../../utils/CustomError');
const moment = require("moment");

const sanitizeCaseData = (data) => {
  const {case_owner_id,case_reason,contact_id,deal_id,product_id,...datas} = data
 const cases =  {
        ...datas,
        // product_id: Number(datas?.product_id) || null,
        // case_reason: Number(datas?.case_reason) || null,
        // contact_id: Number(datas?.contact_id) || null,
        // deal_id: Number(datas?.deal_id) || null,
        // case_owner_id: datas.case_owner_id ? Number(datas.case_owner_id) : null,
        account_id: Number(datas?.account_id) || null,
        reported_by: Number(datas?.reported_by) || null,
        is_active: datas.is_active || "Y",
        log_inst: datas.log_inst || 1,
        description: datas.description ? String(datas.description).trim() : "",
      };
      if (case_owner_id) {
        cases.cases_user_owner = {
          connect: { id: Number(case_owner_id) },
        };
      }

      if (case_reason) {
        cases.case_reasons = {
          connect: { id: Number(case_reason) },
        };
      }
      if (contact_id) {
        cases.case_contact = {
          connect: { id: Number(contact_id) },
        };
      }
      if (deal_id) {
        cases.case_deal = {
          connect: { id: Number(deal_id) },
        };
      }
      if (product_id) {
        cases.case_product = {
          connect: { id: Number(product_id) },
        };
      }
      return cases
};

const createCases = async (req, res, next) => {
  try {
    let caseData = { ...req.body };
    caseData = sanitizeCaseData( caseData); // Sanitize the cases data and handle company icon

    const cases = await casesService.createCases({...caseData,createdby:Number(req.user.id)});
    res.status(201).success('cases created successfully', cases);
  } catch (error) {
    next(error);
  }
};

const findCasesById = async (req, res, next) => {
  try {
    const cases = await casesService.findCasesById(req.params.id);
    if (!cases) throw new CustomError('cases not found', 404);
    res.status(200).success(null, cases);
  } catch (error) {
    next(error);
  }
};

const updateCases = async (req, res, next) => {
  try {
    // Handle company icon upload if provided
    const companyIconPath = req.file ? req.file.path : null; // Construct the file path if the icon is uploaded

    let caseData = { ...req.body };
    caseData = sanitizeCaseData( caseData); // Sanitize the cases data and handle company icon



    const cases = await casesService.updateCases(req.params.id, {...caseData,updatedby:req.user.id});
    res.status(200).success('cases updated successfully', cases);
  } catch (error) {
    next(error);
  }
};

const deleteCase = async (req, res, next) => {
  try {
    await casesService.deleteCase(req.params.id);
    res.status(200).success('cases deleted successfully', null);
  } catch (error) {
    next(error);
  }
};

const getAllCases = async (req, res, next) => {
  try {
    const { page , size , search ,startDate,endDate } = req.query;
    const casess = await casesService.getAllCases(search ,Number(page), Number(size),startDate && moment(startDate),endDate && moment(endDate));
    res.status(200).success(null, casess);
  } catch (error) {
    next(error);
  }
};
const getAllCaseReasons = async (req, res, next) => {
  try {
    const {dataFilter} = req.query
    const casess = await casesService.getAllCaseReasons(dataFilter);
    res.status(200).success(null, casess);
  } catch (error) {
    next(error);
  }
};
const generateCaseNumber = async (req, res, next) => {
  try {
    const casess = await casesService.generateCaseNumber();
    res.status(200).success(null, casess);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createCases,
  findCasesById,
  updateCases,
  deleteCase,
  getAllCases,
  getAllCaseReasons,
  generateCaseNumber
};
