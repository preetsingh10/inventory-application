const { getCategoryItems,getItemsData,updateCategory, deleteCategory} = require("../controllers/categoryController");
const express = require("express");
const router = express.Router();

router.get('/data/:categoryId', getItemsData)
router.post('/updatedCategory', updateCategory)
router.get("/:categoryId", getCategoryItems);
router.post('/delete/:id',deleteCategory)

module.exports = router;
