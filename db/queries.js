const pool = require("./pool");

async function getAllCategories() {
  const data = await pool.query("SELECT * FROM categories ORDER BY id");
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
async function getCategoryName(categoryId) {
  const data = await pool.query("SELECT name FROM categories WHERE id=($1)", [
    categoryId,
  ]);
  return data.rows[0].name;
}
async function updateCategoryInDb(id, name) {
  try {
    await pool.query("UPDATE categories SET name=($1) WHERE id=($2)", [
      name,
      id,
    ]);
  } catch (error) {
    console.log(error);
  }
}
async function deleteCategoryInDb(categoryId) {
  try {
    // first delete all the items in that category
    await pool.query("DELETE FROM items WHERE category_id = ($1)",[categoryId])
    // then delete the category
    await pool.query("DELETE FROM categories WHERE id = ($1)", [categoryId]);
  } catch (e) {
    console.log(e);
  }
}
module.exports = {
  getAllCategories,
  getAllItems,
  getCategoryItemsFromDb,
  addCategoryToDb,
  addItemInDb,
  getCategoryName,
  updateCategoryInDb,
  deleteCategoryInDb,
};
