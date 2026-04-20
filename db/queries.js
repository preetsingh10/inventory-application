const pool = require("./pool");

async function getAllCategories() {
  const data = await pool.query("SELECT * FROM categories");
  return data.rows;
}

async function getAllItems() {
  const data = await pool.query("SELECT * FROM items");
  return data.rows;
}

async function getCategoryItemsFromDb(categoryId) {
  const data = await pool.query(
    "SELECT * FROM items WHERE category_id = ($1)",
    [categoryId],
  );
  return data.rows;
}
async function addCategoryToDb(categoryName) {
  await pool.query("INSERT INTO categories(name) VALUES($1)", [categoryName]);
}
module.exports = {
  getAllCategories,
  getAllItems,
  getCategoryItemsFromDb,
  addCategoryToDb,
};
