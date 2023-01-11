const mongoose = require('mongoose');
// create student schema & model
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required : [true, 'Please add a product Name'],
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        required : [true, 'Please add a product Description'],
        maxlength: 2000,
    },
    price: {
        type: Number,
        trim: true,
        required : [true, 'Product must have a price'],
        maxlength: 32
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
    
}, {timestamps: true});
  

const Products = mongoose.model('products',ProductSchema);
module.exports = Products;