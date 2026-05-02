const express = require("express");
const app = new express();
const PORT = 6969;
const categoryRouter = require('./routes/categoryRoutes')
const { getIndex } = require("./controllers/inventoryController");
const {addCategory} = require('./controllers/addCategoryController')
const {addItemController} = require('./controllers/addItemController')

app.set("view engine", "ejs");

// Middleware to parse URL-encoded bodies (e.g., from HTML forms)
app.use(express.urlencoded({ extended: true }));

// css static files
app.use(express.static('public'))
app.get("/", getIndex);

// category request handler
app.use('/category', categoryRouter)

// add category request handler
app.post('/addCategory', addCategory)

// add Item request Handler
app.post('/addItem', addItemController)

app.listen(PORT, () => {
  console.log("the app is running on port: ", PORT);
});
