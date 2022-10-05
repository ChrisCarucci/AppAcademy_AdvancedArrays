const assert = require('assert');

const removeEWords = require('../problems/04-remove-e-words-filter');

describe('removeEWords()', function () {
  it('should return a string with all words that don\'t have an e with Array\'s filter method', function () {
    assert.equal(removeEWords('What time is it everyone?'), 'What is it');
    assert.equal(removeEWords('Enter the building'), 'building');
  });
});


