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
async function addItemInDb(itemName, itemPrice, itemQuantity, categoryId) {
  await pool.query(
    "INSERT INTO items( name, price, quantity, category_id)  VALUES($1,$2,$3,$4)",
    [itemName, itemPrice, itemQuantity, categoryId],
  );
}
module.exports = {
  getAllCategories,
  getAllItems,
  getCategoryItemsFromDb,
  addCategoryToDb,
  addItemInDb,
};
