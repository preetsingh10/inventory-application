const { getCategoryItems,getItemsData,updateCategory, deleteCategory, updateItems} = require("../controllers/categoryController");
const express = require("express");
const router = express.Router();

router.get('/data/:categoryId', getItemsData)
router.post('/updatedCategory', updateCategory)
router.get("/:categoryId", getCategoryItems);
router.post('/delete/:id',deleteCategory)
// router.post('/updateItems/:categoryId',updateItems)
module.exports = router;
