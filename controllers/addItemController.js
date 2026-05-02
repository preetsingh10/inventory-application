const {addItemInDb} = require('../db/queries')
async function addItemController(req, res) {
 const {itemName, itemPrice, quantity ,categoryId } = req.body
  console.log("request Body: ",req.body)
  await addItemInDb(itemName, itemPrice, quantity, categoryId);
  res.redirect("/");
}

module.exports ={
    addItemController
}
