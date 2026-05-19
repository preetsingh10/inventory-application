const toCents = require("../utilityFunctions/toCents")
const {addItemInDb} = require('../db/queries')
async function addItemController(req, res) {
 const {itemName, itemPrice, quantity ,categoryId } = req.body
  await addItemInDb(itemName, toCents(itemPrice), quantity, categoryId);
  res.redirect("/");
}


module.exports ={
    addItemController
}
