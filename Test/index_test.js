'use strict'

const test = require('tape');
const sut = require('../');

test('Test 42', function(t){
    t.equal(sut.theAnswer, 42);
    t.end();
});