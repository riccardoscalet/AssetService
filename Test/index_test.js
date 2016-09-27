'use strict'

const test = require('tape');

const memdb = require('memdb');

const mymod = require('../');



test('addAsset', function(t){
    //Arrange
    var sut = new mymod(memdb());

    //Act
    var newAsset = sut.addAsset();

    t.equal(newAsset, "aaa");
    t.end();
});
