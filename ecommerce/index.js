const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const productsRouter = require('./routes/views/products');
const productsApiRouter = require('./routes/api/products');

//App
const app = express();

//Middlewares
app.use(bodyParser.json());

// Static files
app.use("/static", express.static(path.join(__dirname, "public")))

// View engine setup
app.set("views", "./views", path.join(__dirname, "views"))
app.set("view engine", "pug")


//Routes
app.use("/products", productsRouter);
app.use("/api/products", productsApiRouter)

//Redirect
app.get('/', function(req, res) {
    res.redirect('/products')
})

//Server
const server = app.listen(3000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});