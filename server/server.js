let http = require('http');
let url = require('url');
let log = require('./log')(module);
let fs = require('fs');

let server = new http.Server(function (req, res) {
    log.info(req.method, req.url, req.headers);

    let urlParsed = url.parse(req.url, true);

    if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
        // res.writeHead(200, "OK", {'Cache-control': 'no-cache'}); method the same as set header, but send status code and header imediately, don'w waint res.end() method.
        fs.readFile('../index.html', (error, info) => {
            if (error) { // Don't forget process error
                console.log(error);
                res.statusCode = 500;
                res.end('Ошибка чтения файлв');
            }

            res.setHeader('Cache-control', 'no-cache'); // removeHeader - delete header
            log.debug(urlParsed.query.message);
            res.end(`${info} <br> query in param - ${urlParsed.query.message}`);
        });

    } else {
        log.error('Unknown page');
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(1234, '127.0.0.1'); // EventEmitter
log.info('Server is runing');

// let emit = server.emit;
// server.emit = function(event) {
// 	console.log(event);
// 	emit.apply(server, arguments);
// }

/**
 * LibUV:
 * 1- crossplatform Input/Output
 */
