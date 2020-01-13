var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');


router.get('/', function(req, res, next) {
    
    //access objects
    Product.find(function(err, docs){
        
        var productChunks = [];
        var chunkSize = 3;  //display the 3 in the index.hbs file
        
        for (var i = 0; i < docs.length; i += chunkSize){
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', { title: 'MOVIES', products: productChunks }); 
    });

});

router.get('/adstra', function(req, res, next) {
        res.render('shop/adstra', { title: 'Adstra Movie details' });
});

router.get('/starwars', function(req, res, next) {
        res.render('shop/starwars', { title: 'Star Wars Movie details' });
});

router.get('/joker', function(req, res, next) {
        res.render('shop/joker', { title: 'Joker Movie details' });
});

router.get('/favourites', function(req, res, next) {
        res.render('shop/favourites', { title: 'My favourite movie' });
});




router.get('/my-favourites', function(req, res, next) {
   //do I have a cart?
    if(!req.session.cart) {
        return res.render('shop/my-favourites', {products: null});
    }
    
    //else if we have the cart
    var cart = new Cart(req.session.cart);
    res.render('shop/my-favourites', {products: cart.generateArray(), totalPrice: cart.totalPrice});    //generate array of those items 
});


module.exports = router;
