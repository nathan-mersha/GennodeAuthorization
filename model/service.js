/**
 * @author              GenNode Authorization
 * @name                GenNode Authorization
 * @module              service.js
 * @description         Defines model for service
 * @kind                Model
 * @copyright           Copyright : 2021
 */

let
    mongoose            = require('mongoose'),
    Schema              = mongoose.Schema,
    config              = require('../config'),
    mongoosastic        = require('mongoosastic'),
    constants           = require('../lib/constant').constant,
    debug               = require('debug')('GenNode Authorization/model/service'),
    mongoosePaginate    = require('mongoose-paginate');

let service = new Schema({
    // Schema definition begins here
    name            : {type : String, required : true,es_indexed:true},
    serviceId       : {type : String, required : true},
    routes          : [{
        method      : {type : String, enum : constants.METHODS, required : true},
        route       : {type : String, required : true},
        group       : {type : String},
        name        : {type : String},
        description : {type : String}
    }],
    firstModified   : {type : Date},
    lastModified    : {type : Date}
    // Schema definition ends here
});


/*
 Adding plugins
 */
service.plugin(mongoosePaginate);

/*
 Adding plugin
 */
service.plugin(mongoosastic,{
    hosts : [
        String(config.ELASTIC_SEARCH_URL), // Adding elastic search url for latter search indexing...
    ]
});


// Updating time Stamp of first and last modified before initial save
service.pre('save',function preSave(next) {
    let serviceSchema  = this;
    let now = new Date();

    if(!serviceSchema.firstModified ){  // Saving for the first time
        serviceSchema.firstModified  = now.toISOString();
        serviceSchema.lastModified   = now.toISOString();
        next();
    }else{ // Saving Modified data
        serviceSchema.lastModified   = now.toISOString();
        next();
    }
});

let serviceSchema = mongoose.model('service', service);

/**
 * @description     - Creating mapping with elastic search
 */
serviceSchema.createMapping(function (err,mapping) {
    if(err){
        debug(`Error while mapping`);
        debug(`Error is : ${err}`);
    }else{
        debug(`Successful Mapping`);
        debug(`${mapping}`);
    }
});

module.exports = serviceSchema;