const { getCategoryItems,getItemsData,updateCategory } = require("../controllers/categoryController");
const express = require("express");
const router = express.Router();

router.get('/data/:categoryId', getItemsData)
router.post('/updatedCategory', updateCategory)
router.get("/:categoryId", getCategoryItems);

module.exports = router;
