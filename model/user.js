/**
 * @author              GenNode Authorization
 * @name                GenNode Authorization
 * @module              user.js
 * @description         Defines model for user
 * @kind                Model
 * @copyright           Copyright : 2021
 */

let
    mongoose            = require('mongoose'),
    Schema              = mongoose.Schema,
    config              = require('../config'),
    mongoosastic        = require('mongoosastic'),
    debug               = require('debug')('GenNode Authorization/model/user'),
    mongoosePaginate    = require('mongoose-paginate');

let user = new Schema({
    // Schema definition begins here
    firstName       : {type : String, es_indexed : true},
    lastName        : {type : String, es_indexed : true},
    phone           : {type : String, es_indexed : true},
    email           : {type : String, es_indexed : true},
    type            : {type : String, default : "user", enum : ["user", "service"]},
    userId          : {type : String, required : true, unique : true, es_indexed : true},
    firstModified   : {type : Date},
    lastModified    : {type : Date}
    // Schema definition ends here
});


/*
 Adding plugins
 */
user.plugin(mongoosePaginate);

/*
 Adding plugin
 */
user.plugin(mongoosastic,{
    hosts : [
        String(config.ELASTIC_SEARCH_URL), // Adding elastic search url for latter search indexing...
    ]
});


// Updating time Stamp of first and last modified before initial save
user.pre('save',function preSave(next) {
    let userSchema  = this;
    let now = new Date();

    if(!userSchema.firstModified ){  // Saving for the first time
        userSchema.firstModified  = now.toISOString();
        userSchema.lastModified   = now.toISOString();
        next();
    }else{ // Saving Modified data
        userSchema.lastModified   = now.toISOString();
        next();
    }
});

let userSchema = mongoose.model('user', user);

/**
 * @description     - Creating mapping with elastic search
 */
userSchema.createMapping(function (err,mapping) {
    if(err){
        debug(`Error while mapping`);
        debug(`Error is : ${err}`);
    }else{
        debug(`Successful Mapping`);
        debug(`${mapping}`);
    }
});

module.exports = userSchema;