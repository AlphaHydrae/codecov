const { add, subtract } = require('../lib/example');
const { expect } = require('chai');

describe('add', function() {
  it('should add two numbers', function() {
    expect(add(2, 3)).to.equal(5);
  });
});

describe('subtract', function() {
  it('should subtract two numbers', function() {
    expect(subtract(2, 3)).to.equal(-1);
  });
});
