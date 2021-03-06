/**
 * @author              GenNode Authorization
 * @name                GenNode Authorization
 * @module              index.js
 * @description         Defines index routes
 * @kind                Route
 * @copyright           Copyright : 2021
 */

// Begin route var declaration here
let
    token   = require('./token'),
    service = require('./service'),
    user    = require('./user'),
    role    = require('./role'),
    acm     = require('./acm'),
    admin   = require('./admin'),
    schema  = require('./schema'),
    log     = require('./log'),
    stat     = require('./stat'),
    search  = require('./search');
// End route var declaration here

/**
 * @description     - Defines the first routing mechanism
 * @param app       - The router object
 */
module.exports = function (app) {
// Begin routing definition here
    app.use('/auth/token', token);
    app.use('/auth/service', service);
    app.use('/auth/search', search);
    app.use('/auth/user', user);
    app.use('/auth/role', role);
    app.use('/auth/acm', acm);
    app.use('/auth/admin', admin);
    app.use('/auth/schema', schema);
    app.use('/auth/log', log);
    app.use('/auth/stat', stat);

// End Routing definition here
};
