const { getCategoryItems,getItemsData } = require("../controllers/categoryController");
const express = require("express");
const router = express.Router();

router.get("/:categoryId", getCategoryItems);
router.get('/data/:categoryId', getItemsData)

module.exports = router;
