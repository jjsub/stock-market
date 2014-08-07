'use strict';

var Stock = require('./models/stock');      // This is the requiere os the export ( module.exports = Stock;) from the module Stock//

var stock = new Stock('fb');

stock.getQuote(function(){
  console.log(stock);
});

