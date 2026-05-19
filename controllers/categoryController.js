const {
  getCategoryItemsFromDb,
  getAllCategories,
  getCategoryName,
  updateCategoryInDb,
  deleteCategoryInDb,
  updateItemsInDb
} = require("../db/queries");
const toCents = require("../utilityFunctions/toCents")
async function getCategoryItems(req, res) {
  const categoryId = req.params.categoryId;
  const items = await getCategoryItemsFromDb(categoryId);
  const categories = await getAllCategories();
  const currentCategory = await getCategoryName(categoryId);
  res.render("items", { currentCategory, categoryId, categories, items });
}

async function getItemsData(req, res) {
  const categoryId = req.params.categoryId;
  const items = await getCategoryItemsFromDb(categoryId);
  res.render("editItems", { items, categoryId });
}
async function updateCategory(req, res) {
  const categoryId = req.body.categoryId;
  const updatedCategoryName = req.body.categoryName;
  try {
    await updateCategoryInDb(categoryId, updatedCategoryName);
  } catch (error) {
    console.log(error);
  }
  res.redirect("/edit");
}
async function deleteCategory(req, res) {
  const categoryId = req.params.id;
  await deleteCategoryInDb(categoryId);
  res.redirect("/edit");
}
async function updateItems(req, res) {
  const categoryId = req.params.categoryId;
  // await updateAllItemsOfCategory(categoryId)
  const updatedState = req.body
  const updatedItems = updatedState.itemId.map((id,index)=>{
    return{
      id: updatedState.itemId[index],
      name: updatedState.itemName[index],
      price: toCents(updatedState.itemPrice[index]), // converting dollars to cents to store in db 
      quantity: updatedState.itemQuantity[index]
    }
  })
  // updatedItems.forEach(async(item)=>{
  //    await updateItemsInDb(item.id,item.name, item.price, item.quantity)
  // })
  for(const item of updatedItems){
     await updateItemsInDb(item.id,item.name, item.price, item.quantity)
  }
  
  const items = await getCategoryItemsFromDb(categoryId)
  res.render("editItems",{items, categoryId})
}

module.exports = {
  getCategoryItems,
  getItemsData,
  updateCategory,
  deleteCategory,
  updateItems,
};
