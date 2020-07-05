import { expect } from 'chai';

import { add, subtract } from './example';

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
