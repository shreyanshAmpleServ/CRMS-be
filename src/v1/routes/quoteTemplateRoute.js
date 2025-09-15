const express = require("express");
const quoteTemplateController = require("../controller/quoteTemplateController");
const { authenticateToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post(
  "/quote-template",
  authenticateToken,
  quoteTemplateController.createQuoteTemplate
);
router.get("/quote-template/:id", authenticateToken, quoteTemplateController.getQuoteTemplateById);
router.put(
  "/quote-template/:id",
  authenticateToken,
  quoteTemplateController.updateQuoteTemplate
);
router.delete("/quote-template/:id", authenticateToken, quoteTemplateController.deleteQuoteTemplate);
router.get("/quote-template", authenticateToken, quoteTemplateController.getAllQuoteTemplate);

module.exports = router;
