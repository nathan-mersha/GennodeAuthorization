/**
 * @author              GenNode Authorization
 * @name                GenNode Authorization
 * @module              index.js
 * @description         Index for constants and errorCodes
 * @kind                Constants
 * @copyright           Copyright : 2021
 */


let
    accessRoutes = require('./accessRoutes'),
    constant     = require('./constant'),
    errorCodes   = require('./errorCodes');

module.exports = {
    accessRoutes : accessRoutes,
    constant     : constant,
    errorCodes   : errorCodes
};
