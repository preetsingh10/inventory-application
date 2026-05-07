const { getCategoryItemsFromDb, getAllCategories } = require("../db/queries"); async function editController(req, res) {
    const categories = await getAllCategories()
    res.render("editView", { categories });
}
module.exports = { editController };
