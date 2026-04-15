const express = require("express");
const app = new express();
const PORT = 6969;
const categoryRouter = require('./routes/categoryRoutes')
const { getIndex } = require("./controllers/inventoryController");

app.set("view engine", "ejs");

// Middleware to parse URL-encoded bodies (e.g., from HTML forms)
app.use(express.urlencoded({ extended: true }));

app.get("/", getIndex);

// category request handler
app.use('/category', categoryRouter)


app.listen(PORT, () => {
  console.log("the app is running on port: ", PORT);
});
