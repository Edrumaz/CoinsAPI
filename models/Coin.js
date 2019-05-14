const mongoose = require('mongoose'),
      Schema =  mongoose.Schema;

// Definicion de Coin
let Coin = new Schema({
    name: String,
    country: String,
    symbol: String
});

module.exports = mongoose.model('coin',Coin)
