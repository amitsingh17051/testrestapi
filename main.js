require('dotenv').config()
const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = express();
const port = process.env.PORT || "8000";
const { getAllProducts } = require('./controllers/productController')
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

// Set View engine
app.set('view engine', 'ejs');

// connect to mongodb database
mongoose.connect('mongodb+srv://root:root@cluster0.iagif.mongodb.net/?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use('/categories',require('./router/categories'));
app.use('/products',require('./router/products'));


// views
app.get('/', (req, res) => {
    res.render('index', { title: 'My EJS Page', productData: getAllProducts });
});


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});