'use strict';

var request = require('request');

function Stock(symbol){
  this.symbol = symbol.toUpperCase();
}

Stock.prototype.getQuote = function(cb){
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=' + this.symbol;
  var self = this;

  request(url, function(err, res, body){
    var data = JSON.parse(body);
    self.price = data.LastPrice;
    cb();
  });

};

module.exports = Stock;

