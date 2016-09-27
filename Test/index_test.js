'use strict'

const test = require('tape');
const sut = require('../');

test('aaa', function(t){
    t.equal(sut.theAnswer, 42);
    t.end();
});