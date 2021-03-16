/**
 * @author              GenNode Authorization
 * @name                GenNode Authorization
 * @module              schema.js
 * @description         DAL for schema model.
 * @kind                DAL
 * @copyright           Copyright : 2021
 */

let
    userModel   = require('../model/user'),
    roleModel   = require('../model/role'),
    serviceModel = require('../model/service'),
    schemaModel  = require('../model/schema'),
    async        = require('async');


exports.search  = function (query, searchInString, callback) {
    let results = {
        user : [],
        role : [],
        service : [],
        schema : []
    };

    let searchIn = Array.from(searchInString.split(","), x => x.toLowerCase());

    async.waterfall([
        searchInUser,
        searchInRole,
        searchInService,
        searchInSchema
    ],function () {
        callback(null, results);
    });


    /**
     * @name                - Search in user
     * @description         - Searches in the user model
     * @param callback      - Callback function (error)
     */
    function searchInUser(callback) {
        if(searchIn.includes("user") || searchIn.includes("*")){
            userModel.search({query_string : {query : query}},function (err, result) {
                results.user.push(result);
                callback(null);
            })
        }else{
            callback(null);
        }
    }


    /**
     * @name                - Search in role
     * @description         - Searches in the role model
     * @param callback      - Callback function (error)
     */
    function searchInRole(callback) {
        if(searchIn.includes("role") || searchIn.includes("*")){
            roleModel.search({query_string : {query : query}},function (err, result) {
                results.role.push(result);
                callback(null);
            })
        }else{
            callback(null);
        }
    }

    /**
     * @name                - Search in service
     * @description         - Searches in the service model
     * @param callback      - Callback function (error)
     */
    function searchInService(callback) {
        if(searchIn.includes("service") || searchIn.includes("*")){
            serviceModel.search({query_string : {query : query}},function (err, result) {
                results.service.push(result);
                callback(null);
            })
        }else{
            callback(null);
        }
    }

    /**
     * @name                - Search in schema
     * @description         - Searches in the schema model
     * @param callback      - Callback function (error)
     */
    function searchInSchema(callback) {
        if(searchIn.includes("schema") || searchIn.includes("*")){
            schemaModel.search({query_string : {query : query}},function (err, result) {
                results.schema.push(result);
                callback(null);
            })
        }else{
            callback(null);
        }
    }


};