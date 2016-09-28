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

test('modifyState - Without asset on DB - Should return err', function(t) {
    //Arrange
    var sut = new mymod(memdb());

    var updatedAsset = {
        name: "powerfullllll pineapple",
        state: 0
    }

    //Act
    t.plan(1);
    sut.modifyState(updatedAsset, function(err, value) {
        t.notEqual(err, null);
    });

});

test('modifyState - With asset on DB - Should complete operation', function(t) {
    //Arrange
    var sut = new mymod(memdb());

    var newAsset = {
        name: "normal pineapple",
        state: 0
    }
    sut.addAsset(newAsset);

    var updatedAsset = {
        name: "normal pineapple",
        state: 0
    }

    //Act
    t.plan(1);
    sut.modifyState(updatedAsset, function(err, value) {
        t.assert(err == null);
    });

});


test('getState - Without asset on DB - Should return err', function(t) {
    //Arrange
    var sut = new mymod(memdb());

    var getAsset = {
        name: "not existing pineapple",
    }

    //Act
    t.plan(1);
    sut.getState(getAsset, function(err, state) {
        t.notEqual(err, null);
    });

});

test('getState - With asset on DB - Should complete operation', function(t) {
    //Arrange
    var sut = new mymod(memdb());

    var asset = {
        name: "existing banana",
        state: 1
    }
    sut.addAsset(asset);

    //Act
    t.plan(2);
    sut.getState(asset, function(err, state) {
        t.assert(err == null);
        t.equal(state, 1);
    });
});