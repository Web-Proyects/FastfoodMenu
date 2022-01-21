var express = require('express');
var router = express.Router();
var productModel = require('../model/product');

/* GET home page. */
router.get('/', async function(req, res, next) {
    try{
        var products = await productModel.getAllProducts();
        res.send(products)
    }catch (error){
        console.log(error);
    }
});

module.exports = router;