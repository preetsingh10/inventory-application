const { getCategoryItems } = require("../controllers/categoryController");
const express = require("express");
const router = express.Router();

router.get("/:categoryId", getCategoryItems);

module.exports = router;
