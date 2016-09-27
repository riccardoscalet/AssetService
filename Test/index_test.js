'use strict'

const test = require('tape');

const memdb = require('memdb');

const mymod = require('../');



test('addAsset', function(t){
    //Arrange
    var sut = new mymod(memdb());
    var newAsset = {
        name : "powerfull banana",
        state : 0
    }
    //Act
    sut.addAsset(newAsset, function(){
        t.pass("funziona!");
    });

    t.end();
});
