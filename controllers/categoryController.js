const { getCategoryItemsFromDb,getAllCategories, getCategoryName} = require("../db/queries");
async function getCategoryItems(req, res) {
  const categoryId = req.params.categoryId;
  const items = await getCategoryItemsFromDb(categoryId);
  const categories = await getAllCategories()
  const currentCategory = await getCategoryName(categoryId)
  res.render("items", { currentCategory, categoryId, categories,items});
}

async function getItemsData(req,res){
   const categoryId = req.params.categoryId; 
    const items = await getCategoryItemsFromDb(categoryId);
    console.log("thuadi request vich ehe ayea:", req.params.categoryId)
    console.log(items)
    res.render('editItems',{items})
}

module.exports = {
  getCategoryItems,
  getItemsData
};
