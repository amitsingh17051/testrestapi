const express = require('express');
const router = express.Router();


const { 
    getAllCategories,
    getSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory
 } = require('../controllers/categoryController')

// Get all category
router.get('/', getAllCategories);

// Get single category
router.get('/:id', getSingleCategory);

// Create Category
router.post('/', createCategory);

// Update Category
router.put('/:id', updateCategory);

// Delete Category
router.delete('/:id', deleteCategory);

module.exports = router;