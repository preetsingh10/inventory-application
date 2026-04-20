const { getCategoryItemsFromDb } = require("../db/queries");
async function getCategoryItems(req, res) {
  const categoryId = req.params.categoryId;
  const items = await getCategoryItemsFromDb(categoryId);
  res.render("items", { items });
}

module.exports = {
  getCategoryItems,
};
