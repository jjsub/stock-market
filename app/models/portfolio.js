/* jshint loopfunc: true */

'use strict';

function Portfolio(stocks){
  this.stocks = stocks;
}

Portfolio.prototype.value = function(){
  var stocksArray = this.stocks;
  var value = 0;
  for (var i=0; i<stocksArray.length; i++){
    stocksArray[i].getQuote(function(){
      value += stocksArray[i].price;
    });
  }
  return value;
};

module.exports = Portfolio;

