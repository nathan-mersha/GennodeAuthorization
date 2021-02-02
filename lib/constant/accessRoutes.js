/**
 * @author              GenNode Authorization
 * @name                GenNode Authorization
 * @module              accessRoutes.js
 * @description         Open and close routes
 * @kind                Routes
 * @copyright           Copyright : 2021
 */


// NOTE : Don't end endpoint with "/"

const baseURL = "/auth";

module.exports = {
    openRoute   : [
        {method : "POST", endpoint : `${baseURL}/admin/login`}
    ],
    superAdmin  : [
        {method : "POST", endpoint : `${baseURL}/admin/signUp`},
        {method : "PUT",  endpoint : `${baseURL}/admin`},
        {method : "GET",  endpoint : `${baseURL}/admin`},
        {method : "DELETE", endpoint : `${baseURL}/admin`}
    ]
};