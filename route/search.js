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
    controller  = require('../controller/search');

/**
 * @api             {post} /auth/search     Search
 * @apiVersion      0.0.1
 * @apiName         Create
 * @apiGroup        Search
 * @apiDescription  Search inside acm, role, service, user
 *
 * @apiPermission     All
 *
 * @apiParam    (Query)  {String }    q     - query
 * @apiParam    (Query)  {String="user", "role", "service", "schema", "*"}    in    - search in

 *
 * @apiSuccessExample Body
 *
 * {
    "user": [
        {
            "took": 47,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": 1,
                "max_score": 0.2876821,
                "hits": [
                    {
                        "_index": "users",
                        "_type": "_doc",
                        "_id": "60509879285aa335161eb52b",
                        "_score": 0.2876821,
                        "_source": {
                            "name": "nathan",
                            "userId": "123456789"
                        }
                    }
                ],
                "extTotal": {
                    "value": 1,
                    "relation": "eq"
                }
            }
        }
    ],
    "role": [
        {
            "took": 2,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": 0,
                "max_score": null,
                "hits": [],
                "extTotal": {
                    "value": 0,
                    "relation": "eq"
                }
            }
        }
    ],
    "service": [
        {
            "took": 7,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": 0,
                "max_score": null,
                "hits": [],
                "extTotal": {
                    "value": 0,
                    "relation": "eq"
                }
            }
        }
    ],
    "schema": [
        {
            "took": 2,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": 0,
                "max_score": null,
                "hits": [],
                "extTotal": {
                    "value": 0,
                    "relation": "eq"
                }
            }
        }
    ]
}


 * @apiSampleRequest http://localhost:3400/auth/search
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
router.get('/'     , controller.search);

module.exports = router;
