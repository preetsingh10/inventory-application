const pool = require('./pool')

async function getAllCategories(){
    const data =  await pool.query("SELECT * FROM categories")
    return  data.rows
}

async function getAllItems(){
    const data = await pool.query("SELECT * FROM items")
    return data.rows
}

module.exports = {
    getAllCategories,
    getAllItems
}