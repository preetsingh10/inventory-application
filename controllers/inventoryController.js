const { getAllCategories, getAllItems } = require("../db/queries");

async function getIndex(req, res) {
  const categories = await getAllCategories();
  res.render("index", { categories, currentCategory:null });
}
module.exports = {
  getIndex,
};
