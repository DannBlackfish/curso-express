const express = require('express');
const router = express.Router();

const products = [
    {
        name: "Red shoes",
        price: 75,
        image: "https://i.pinimg.com/originals/67/8d/b9/678db979c04155943aabffb424c60c6e.jpg"
    },
    {
        name: "Black bike",
        price: 300,
        image: "https://www.westbrookcycles.co.uk/images/gt-bicycles-avalanche-expert-hardtail-mountain-bike-matte-black-2020-p345710-550215_image.jpg"
    }
]

router.get('/', function(req, res) {
    res.render("products", { products });
});

module.exports = router;