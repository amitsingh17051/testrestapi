const express = require('express');
const router = express.Router();
const Product = require('../models/productSchema');

const { 
    getAllProducts, 
    createProduct, 
    getSingleProduct,
    updateProduct,
    deleteProduct
 } = require('../controllers/productController')


// Get single idea
router.get('/',  getAllProducts);

// Get single idea
router.get('/:id', getSingleProduct);

// Create product
router.post('/', createProduct);

// update product
router.put('/:id', updateProduct);

// delete product
router.delete('/:id', deleteProduct);

module.exports = router;

