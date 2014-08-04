/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Portfolio = require('../app/models/portfolio');
var Stock = require('../app/models/stock');

describe('Portfolio', function(){
  describe('contructor', function(){
    it('should create a portfolio object', function(){
      var portfolio = new Portfolio();
      expect(portfolio).to.be.instanceOf(Portfolio);
    });
    it('should create a portfolio object with stocks', function(){
      var aapl = new Stock('aapl');
      var fb = new Stock('fb');
      var portfolio = new Portfolio([aapl, fb]);
      expect(portfolio.stocks).to.have.length(2);
    });
  });
  describe('#value', function(){
    it('should return a portfolio\'s value', function(){
      var aapl = new Stock('aapl');
      var fb = new Stock('fb');
      var portfolio = new Portfolio([aapl, fb]);
      expect(portfolio.value()).to.be.at.least(0);
    });
  });
});
