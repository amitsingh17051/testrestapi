const Product = require('../models/productSchema');

const createProductWithCategory = async (productData, categoryIds) => {
    try {
        productData.categories = categoryIds;
        const newProduct = await Product.create(productData);
        return newProduct;
    } catch (error) {
        throw error;
    }
};

const updateProductWithCategory = async (productData, categoryIds, id) => {
    try {
        productData.categories = categoryIds;
        Product.findOneAndUpdate({ _id: id}, productData);
        return productData;
    } catch (error) {
        throw error;
    }
};


const getAllProducts = async (req, res) => {
    const products = await Product.find();
    try {
        res.status(200).send({products});
    } catch (error) {
        res.status(500).json({msg: "No Product founds!"});
    }
}

const createProduct = async (req, res) => {
    try {
        const newProduct = await createProductWithCategory({
            name:req.body.name,
            description: req.body.description,
            price: req.body.price,
        }, req.body.categories)
        res.status(301).json({data: newProduct})
    } catch (error) {
        console.log(error.message);
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const products = await Product.find({ _id: {$eq:req.params.id} });
        res.status(302).send({products});
    } catch (error) {
        res.status(400).json({msg: "No Idea with this is!"});
    }
}

const updateProduct = async (req, res) => {
    try {
        const updateProduct = await updateProductWithCategory({
            name:req.body.name,
            description: req.body.description,
            price: req.body.price,
        }, req.body.categories, req.params.id)
        res.status(301).json({data: updateProduct})
    } catch (error) {
        console.log(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id })
    } catch (error) {
        res.status(400).send({status:false, msg:"Id is not valid"})
    }
    res.status(200).send({status:true, msg:"Product Deleted Sucessfully!"})
}

module.exports = {
    getAllProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}