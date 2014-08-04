'use strict';

var Stock = require('./models/stock');

var stock = new Stock('fb');

stock.getQuote(function(){
  console.log(stock);
});

