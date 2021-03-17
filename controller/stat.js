/**
 * @author              GenNode Authorization
 * @name                GenNode Authorization
 * @module              user.js
 * @description         Controller for user
 * @kind                Controller
 * @copyright           Copyright : 2021
 */

let
    userDAL     = require('../dal/user'),
    serviceDAL  = require('../dal/service'),
    schemaDAL   = require('../dal/schema'),
    roleDAL     = require('../dal/role'),
    debug       = require('debug')('GenNode Authorization/controller/stat'),
    async       = require('async');


/**
 * @name                - Overview
 * @description         - Overview stat data
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
exports.overview          = function (req, res, next) {
    debug('Overview init...');

    let result = {
        users : 0,
        services : 0,
        schema : 0,
        roles : 0,
    // {
    //     name : "bus service",
    //     auth : 0,
    //     unAuth : 0
    //     percentageAuth : 0,
    //     percentageUnAuth : 0,
    //     percentageTotal : 0
    // }
        topServices : [],
        weeklyRequests : {
            Monday : {unAuth : 0, auth : 0},
            Tuesday : {unAuth : 0, auth : 0},
            Wednesday : {unAuth : 0, auth : 0},
            Thursday : {unAuth : 0, auth : 0},
            Friday : {unAuth : 0, auth : 0},
            Saturday : {unAuth : 0, auth : 0},
            Sunday : {unAuth : 0, auth : 0},
        },
        overall : {
            total : 0,
            unAuth : 0,
            auth : 0
        }
    };

    async.waterfall([
        countUsers,
        countServices,
        countSchema,
        countRoles,
        calculateWeeklyStat,
        calculatePercentage,

    ],function () {
        res.status(200);
        res.json(result);
    });

    function countUsers(callback) {
        debug("Count user init");
        userDAL.count({},function (err, count) {
            result.users = count;
            callback(null);
        });
    }

    function countServices(callback) {
        debug("Count services init");
        serviceDAL.count({},function (err, count) {
            result.services = count;
            callback(null);
        });
    }

    function countSchema(callback) {
        debug("Count schema init");
        schemaDAL.count({},function (err, count) {
            result.schema = count;
            callback(null);
        });
    }

    function countRoles(callback) {
        debug("Count roles init");
        roleDAL.count({},function (err, count) {
            result.roles = count;
            callback(null);
        });
    }

    function calculateWeeklyStat(callback) {
        debug("Calculate weekly stat");

        const options = {
            from: req.query.from || new Date() - (24 * 60 * 60 * 1000 * 7),
            until: new Date(),
            limit: 1000,
            start:  0,
            order: 'desc'
        };

        logger.query(options, function (err, logs) {

            let infoLogs = logs.info;
           infoLogs.forEach(function (infoLog) {

               let serviceIndex = result.topServices.findIndex(l => l["name"] === infoLog["service"]);
               if(serviceIndex === -1){ // service has not been registered yet.
                    let serviceData = {
                        name : infoLog["service"],
                        auth : infoLog["status"] === "Access Granted" ? 1 : 0 ,
                        unAuth : infoLog["status"] === "Access Denied" ? 1 : 0
                    };
                    result.topServices.push(serviceData);
               }else{
                   let serviceData = result.topServices[serviceIndex];
                   serviceData.auth = infoLog["status"] === "Access Granted" ? serviceData.auth + 1 : serviceData.auth;
                   serviceData.unAuth = infoLog["status"] === "Access Denied" ? serviceData.unAuth + 1 : serviceData.unAuth;
               }


               // For weekly request stat
               let dayName = new Date(infoLog["timestamp"]).toLocaleString('en-us', {weekday : "long"});
               let authType = infoLog["status"] === "Access Denied" ? "unAuth" : "auth";
               result.weeklyRequests[dayName][authType] = result.weeklyRequests[dayName][authType] + 1;

               // For over all
               result.overall[authType] = result.overall[authType] + 1;

            });

           // For overall total
            result.overall.total = result.overall.unAuth + result.overall.auth;
            callback(null);
        });
    }

    function calculatePercentage(callback) {
        debug("Calculate percentage init.");

        result.topServices.forEach(function (service) {
            service["percentageTotal"] = ((service.auth + service.unAuth) * 100) / result.overall.total;
            service["percentageAuth"] = (service["auth"] * 100) / (service["auth"] + service["unAuth"]);
            service["percentageUnAuth"] = (service["unAuth"] * 100) / (service["auth"] + service["unAuth"]);
        });
        callback(null);
    }


};

/**
 * @name                - Overview
 * @description         - Overview stat data
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
exports.service          = function (req, res, next) {
    debug('Service init...');


};

/**
 * @name                - Overview
 * @description         - Overview stat data
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
exports.role          = function (req, res, next) {
    debug('Role init...');


};

/**
 * @name                - Overview
 * @description         - Overview stat data
 * @param req           - Request object
 * @param res           - Response object
 * @param next          - Next
 */
exports.user          = function (req, res, next) {
    debug('User init...');


};


