'use strict'

module.exports = function(db) {
    return {
        addAsset: function(asset, cb) {
            db.put(asset.name, asset, {valueEncoding: 'json'}, cb);
        },

        modifyState: function(asset, cb) {
            db.get(asset.name, {valueEncoding: 'json'}, function(err, value) {
                if (err) return cb(err);
                db.put(asset.name, asset, {valueEncoding: 'json'}, cb);
            })
        },

        getState: function(asset, cb) {
            db.get(asset.name, {valueEncoding: 'json'}, function(err, value) {
                if (err) return cb(err);
                console.log(value);
                cb(null, value.state);
            })
        }
    }
}