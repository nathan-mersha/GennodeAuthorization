/**
 * @author              GenNode Authorization
 * @name                GenNode Authorization
 * @module              search.js
 * @description         Controller for search
 * @kind                Controller
 * @copyright           Copyright : 2021
 */

let
    searchDAL               = require('../dal/search'),
    debug                   = require('debug')('GenNode Authorization/controller/search');


/**
 * @name                - Search
 * @description         - Search in
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
exports.search            = function (req, res, next) {
    debug('Search init.');

    let query = req.query.q === undefined ? "" : req.query.q.toLowerCase();
    let searchIn = req.query.in === undefined ? "*" : req.query.in;

    searchDAL.search(query,searchIn,function (err,results) {
        res.status(200);
        res.json(results);
    });
};

