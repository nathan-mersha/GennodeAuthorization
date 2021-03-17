/**
 * @author              GenNode Authorization
 * @name                GenNode Authorization
 * @module              service.js
 * @description         Defines route for service
 * @kind                Route
 * @copyright           Copyright : 2021
 */

let
    express     = require('express'),
    router      = express.Router(),
    controller  = require('../controller/stat');

/**
 * @api             {post} /auth/stat/overview     Overview
 * @apiVersion      0.0.1
 * @apiName         Overview stat
 * @apiGroup        Stat
 * @apiDescription  Stat for overview page
 *
 * @apiSampleRequest http://localhost:3400/auth/stat/overview
 *
 * @apiSuccessExample Body

 *{
    "users": 20,
    "services": 2,
    "schema": 0,
    "roles": 15,
    "topServices": [
        {
            "name": "Service A",
            "auth": 1,
            "unAuth": 1,
            "percentageTotal": 50,
            "percentageAuth": 50,
            "percentageUnAuth": 50
        },
        {
            "name": "Service B",
            "auth": 0,
            "unAuth": 2,
            "percentageTotal": 50,
            "percentageAuth": 0,
            "percentageUnAuth": 100
        }
    ],
    "weeklyRequests": {
        "Monday": {
            "unAuth": 0,
            "auth": 0
        },
        "Tuesday": {
            "unAuth": 1,
            "auth": 1
        },
        "Wednesday": {
            "unAuth": 2,
            "auth": 0
        },
        "Thursday": {
            "unAuth": 0,
            "auth": 0
        },
        "Friday": {
            "unAuth": 0,
            "auth": 0
        },
        "Saturday": {
            "unAuth": 0,
            "auth": 0
        },
        "Sunday": {
            "unAuth": 0,
            "auth": 0
        }
    },
    "overall": {
        "total": 4,
        "unAuth": 3,
        "auth": 1
    }
}
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.get('/overview'     , controller.overview);

/**
 * @api             {post} /auth/stat/service     Service
 * @apiVersion      0.0.1
 * @apiName         Service stat
 * @apiGroup        Stat
 * @apiDescription  Stat for service page
 *
 * @apiSampleRequest http://localhost:3400/auth/stat/service
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.get('/service'     , controller.service);


/**
 * @api             {post} /auth/stat/role     Role
 * @apiVersion      0.0.1
 * @apiName         Role stat
 * @apiGroup        Stat
 * @apiDescription  Stat for role page
 *
 * @apiSampleRequest http://localhost:3400/auth/stat/role
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.get('/role'     , controller.role);

/**
 * @api             {post} /auth/stat/user     User
 * @apiVersion      0.0.1
 * @apiName         User stat
 * @apiGroup        Stat
 * @apiDescription  Stat for user page
 *
 * @apiSampleRequest http://localhost:3400/auth/stat/user
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.get('/user'     , controller.user);

module.exports = router;
