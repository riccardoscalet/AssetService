'use strict'

module.exports = function(db){
    return {
        addAsset: function(asset, cb) {
                db.put(asset.name, asset.state, null, cb);
            
        },

        modifyState: function(asset) {

        },

        getState: function(asset){

        }
    }
}