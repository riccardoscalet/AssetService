'use strict'

module.exports = function(db) {
    return {
        addAsset: function(asset, cb) {
            db.put(asset.name, asset, cb);
        },

        modifyState: function(asset, cb) {
            db.get(asset.name, function(err, value) {
                if (err) return cb(err);
                db.put(asset.name, asset, cb);
            })
        },

        getState: function(asset, cb) {
            db.get(asset.name, function(err, value) {
                if (err) return cb(err);
                cb(null, value.state);
            })
        }
    }
}