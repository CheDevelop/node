let winston = require('winston');

module.exports = function(module) {
    return makeLogger(module.filename);
};

function makeLogger(path) {
    if (path.match(/server.js$/)) {
        let transports = [
            new winston.transports.Console({
                timestamp: true, // function() { return new Date().toString() }
                colorize: true,
                level: 'info',
            }),
            new winston.transports.File({ filename: 'debug.log', level: 'debug' })
        ];

        return winston.createLogger({ transports: transports });
    } else {

        return winston.createLogger({
            transports: []
        });
    }
}