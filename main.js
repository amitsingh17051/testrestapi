require('dotenv').config()
const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const https = require('https');
const rateLimit = require("express-rate-limit");
const http = require('http');
mongoose.set('strictQuery', false);
const app = express();
const port = process.env.PORT || "8000";

app.use(
  rateLimit({
    windowMs: 12 * 60 * 60 * 1000, // 12 hour duration in milliseconds
    max: 100,
    message: "You exceeded 100 requests in 12 hour limit!",
    headers: true,
  })
);




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
app.get('/', async (req, res) => {
    // try {
    //   const data = await getAllProductsData();
      
    // } catch(err) {
    //   console.log(err);
    //   res.status(500).send("Internal Server Error");
    // }

    http.get(`http://localhost:${port}/products`, (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        console.log(resp)

    });

    res.render('index')
})

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});