const { deleteItemsFromDb, getCategoryItemsFromDb } = require("../db/queries");
async function deleteItemController(req, res) {
  let { checkboxId: ids_to_be_deleted, categoryId } = req.body;
    if(Array.isArray(ids_to_be_deleted) === false){
        ids_to_be_deleted = [ids_to_be_deleted]
    }
  await deleteItemsFromDb(ids_to_be_deleted);
  const items = await getCategoryItemsFromDb(categoryId);
  res.render("editItems", { items, categoryId });
}
module.exports = { deleteItemController };
