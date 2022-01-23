var express = require('express');
var router = express.Router();
var productCategoryModel = require('../model/product-category');

/* GET home page. */
router.get('/', async function(req, res, next) {
    try{
        var productCategories = await productCategoryModel.getAllProductsCategories();
        res.send(productCategories)
    }catch (error){
        console.log(error);
    }
});

module.exports = router;