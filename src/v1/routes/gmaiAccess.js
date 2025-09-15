const express = require('express');
const emailController = require('../controller/gmailController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

// router.post('/gmail/send', authenticateToken,express.json(),gmailController.sendEmail);
// router.get('/gmail/inbox',authenticateToken,  gmailController.getAllEmail);

router.get('/gmail/url', authenticateToken, emailController.getAuthUrl);
router.post('/gmail/token', authenticateToken, emailController.storeTokens);
router.get('/gmail/check', authenticateToken, emailController.checkGmailConnected);
router.get('/gmail/message', authenticateToken, emailController.getAllEmail);
router.post('/gmail/send', authenticateToken, emailController.sendEmail);

module.exports = router;
