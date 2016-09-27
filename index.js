'use strict'

module.exports = function(db) {
    return {
        addAsset: function(asset, cb) {
            db.put(asset.name, asset, null, cb);
        },

        modifyState: function(asset, cb) {
            db.get(asset.name, null, function(err, value) {
                if (err) {
                    if (err.notFound) throw "Non c'è una mazza!"
                    throw "DB error"
                }

                db.put(asset.name, asset, null, cb);
            })
        },

        getState: function(asset) {

        }
    }
}