const mongoose = require('mongoose');
// create student schema & model
const categorySchema  = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required : [true, 'Please add a Category Name'],
        maxlength: 32
    }
}, );
  

const Category = mongoose.model('category',categorySchema );
module.exports = Category;