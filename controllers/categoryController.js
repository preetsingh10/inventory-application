const {
  getCategoryItemsFromDb,
  getAllCategories,
  getCategoryName,
  updateCategoryInDb,
  deleteCategoryInDb,
} = require("../db/queries");
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
  res.render("editItems", { items, categoryId});
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
// async function updateItems(req, res){
//   const categoryId = req.params.categoryId
//   await updateAllItemsOfCategory(categoryId)
// }

module.exports = {
  getCategoryItems,
  getItemsData,
  updateCategory,
  deleteCategory,
};
