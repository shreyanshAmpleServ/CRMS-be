const gmailService = require('../services/gmailService');
// const GmailToken = require('../models/gmailTokenModel');
const { generateAuthUrl, getTokensFromCode, oauth2Client } = require('../../utils/gmailService');
// Get Google OAuth URL
const getAuthUrl = (req, res) => {
  const url = generateAuthUrl({ userId: req.user.id, action: 'inbox' });
  res.json({ url });
};

// Store tokens in Prisma DB
const storeTokens = async (req, res) => {
  try {
    const { code } = req.body;
    const userId = req.user.id;

    const tokens = await getTokensFromCode(code);
    const expireDatetime = new Date(Date.now() + (tokens.expires_in * 1000));

    // Assume email_id from tokens.id_token or manually provide via frontend
    const email = tokens?.id_token ? JSON.parse(Buffer.from(tokens.id_token.split('.')[1], 'base64')).email : null;

    await prisma.crms_users_email_auth.upsert({
      where: { user_id: userId },
      update: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expire_datetime: expireDatetime,
        email_id: email,
        email_provider: 'gmail',
        other_info: JSON.stringify(tokens)
      },
      create: {
        user_id: userId,
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expire_datetime: expireDatetime,
        email_id: email,
        email_provider: 'gmail',
        other_info: JSON.stringify(tokens)
      }
    });

    res.json({ message: 'Gmail connected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to store Gmail tokens' });
  }
};

// Check if Gmail is connected
const checkGmailConnected = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await prisma.crms_users_email_auth.findUnique({
      where: { id: userId }
    });
    if (!user || !user.access_token || !user.refresh_token) {
      return res.json({ connected: false });
    }
  
    res.json({ connected: true });
    // res.json({ connected: !!token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to check Gmail connection' });
  }
};

const sendEmail = async (req, res, next) => {
  try {
    const cases = await gmailService.sendEmail(req);
    res.status(201).success({message:'Email send successfully',status:200,success:true, cases});
  } catch (error) {
    next(error);
  }
};


const getAllEmail = async (req, res, next) => {
  try {
    // console.log("resss",req.user)
    // const { page , size , search ,startDate,endDate } = req.query;
    // const casess = await gmailService.getAllEmail(search ,Number(page), Number(size),startDate && moment(startDate),endDate && moment(endDate));
    const casess = await gmailService.getAllEmail(res,req.user, req);
    res.status(200).success(null, casess);
  } catch (error) {
    next(error);
  }
};



module.exports = {
  sendEmail,
  getAllEmail,
  getAuthUrl,
  storeTokens,
  checkGmailConnected,
};
