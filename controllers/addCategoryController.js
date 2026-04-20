const { addCategoryToDb } = require("../db/queries");

async function addCategory(req, res) {
  await addCategoryToDb(req.body.categoryName);
  res.redirect("/");
}
module.exports = {
  addCategory,
};
