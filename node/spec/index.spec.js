const { add } = require('../');
const { expect } = require('chai');

describe(add.name, function() {
  it('should add two numbers', function() {
    expect(add(2, 3)).to.equal(5);
  });
});
