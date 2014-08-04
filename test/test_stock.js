/* globals describe, it, done */

'use strict';

var expect = require('chai').expect;
var Stock = require('../app/models/stock');


describe('Stock', function(){
  describe('constructor', function(){
    it('should create a new stock object', function(){
      var stock = new Stock('aapl');

      expect(stock).to.be.instanceOf(Stock);
      expect(stock.symbol).to.equal('AAPL');
    });
  });

  describe('#getQuote', function(){
    it('should update the stock\'s price', function(){
      var stock = new Stock('aapl');
      stock.getQuote(function(){
        expect(stock.price).to.be.at.least(0);
        done(); 
      });
    });
  });
});

