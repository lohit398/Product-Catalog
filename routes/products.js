var express = require('express');
const router = express.Router();
const path = require('path');
const Product = require('../models/product');


router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        console.log(__dirname);
        res.json(products);
    } catch (error) {
        res.send('Error' + err);
    }
})

router.post('/', async (req, res) => {
    const product = new Product({
        Name: req.body.Name,
        Price: req.body.Price,
        InStock: req.body.InStock,
        Image_URL: req.body.Image_URL
    });

    try {
        const p1 = await product.save();
        res.send(p1);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;
