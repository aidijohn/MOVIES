//every seeder per module created. This is for product seed
var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');
    
var products = [
    new Product({
        imagePath: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
        title: 'ADSTRA',
        description: 'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
        price: 10
}),
    new Product({
        imagePath: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
        title: 'StarWars',
        description: 'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
        price: 15
}),
    new Product({
        imagePath: 'https://as2.ftcdn.net/jpg/00/04/80/69/500_F_4806917_aiDByOFddkwlinoPnyDfl732zYHaTpbt.jpg',
        title: 'Joker',
        description: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
        price: 7
})
               ];

