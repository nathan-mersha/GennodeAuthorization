/**
 * @author              GenNode Authorization
 * @name                GenNode Authorization
 * @module              log.js
 * @description         Socket controller for log
 * @kind                Controller
 * @copyright           Copyright : 2021
 */


/**
 * @name            - Stream Log
 * @description     - Streams log
 */
exports.streamLog = function streamLogs() {
    logger.stream({ start: -1 }).on('log', function(log) {
        socket.emit('logs', log);
    });
};

