const { getCategoryItemsFromDb,getAllCategories} = require("../db/queries");
async function getCategoryItems(req, res) {
  const categoryId = req.params.categoryId;
  const items = await getCategoryItemsFromDb(categoryId);
  const categories = await getAllCategories()
  res.render("items", { categories,items });
}

module.exports = {
  getCategoryItems,
};
