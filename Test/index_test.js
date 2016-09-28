'use strict'

const test = require('tape');

const memdb = require('memdb');

const mymod = require('../');



test('addAsset - With ok parameters - Should complete operation', function(t) {
    //Arrange
    var sut = new mymod(memdb());
    var newAsset = {
        name: "powerfullll banana",
        state: 0
    }

    t.plan(1);

    //Act
    sut.addAsset(newAsset, function() {
        t.pass("Funziona!");
    });
});

test('modifyState - ', function(t) {
    //Arrange
    var sut = new mymod(memdb());
    var updatedAsset = {
        name: "powerfullllll pineapple",
        state: 0
    }

    t.plan(0);

    //Act
    sut.modifyState(updatedAsset, function() {
        t.pass("It wooorksss");
    });
});