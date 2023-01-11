const express = require('express');
const router = express.Router();
const Category = require('../models/categorySchema');

// Get all category
router.get('/', async function(req, res){
    try {
        const categories = await Category.find();
        res.status(302).send({categories});
    } catch (error) {
        res.status(400).json({msg: "No category with this is!"});
    }
});


// Get single category
router.get('/:id', async function(req, res){
    try {
        const category = await Category.find({ _id: {$eq:req.params.id} });
        res.status(302).send({category});
    } catch (error) {
        res.status(400).json({msg: "No Category found with this id!"});
    }
});

// Create Category
router.post('/', async function(req, res){
    try {
        const newCategory = await Category.create({
            name:req.body.name,
        }) 
        newCategory.save();
        res.status(301).json({data: newCategory})
    } catch (error) {
        console.log(error.message);
    }
});

// Update Category
router.put('/:id', async function(req, res){
    try {
        const updateCategory = {
            name:req.body.name,
        };
        await Category.findOneAndUpdate({ _id: req.params.id}, updateCategory);
        res.status(301).json({data: req.body})
    } catch (error) {
        console.log(error.message);
    }
});

// Delete Category
router.delete('/:id', async function(req, res){
    try {
        await Category.deleteOne({ _id: req.params.id })
    } catch (error) {
        res.status(400).send({status:false, msg:"Id is not valid"})
    }
    res.status(200).send({status:true, msg:"Category Deleted Sucessfully!"})
});

module.exports = router;