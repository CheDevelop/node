let http = require('http');
let url = require('url');
let fs = require('fs');

let server = new http.Server(function (req, res) {

    process.nextTick(() => { // виконається асинхронно після поточного js, але до того як буде наступний I/O
        res.on('readable', () => {
            // повинен спрацювати на найближчих даних
        });
    });

    setImmediate() // спрацює на наступній ітерації циклу, після I/O

});

server.listen(1234, '127.0.0.1'); // EventEmitter

setTimeout(() => server.close(), 2500); // закрити сервер через 2.5 секунди

let timer = setInterval(() => console.log(process.memoryUsage()), 1000); //викликатиметься кожну секунду і заважатиме серверу закритись

timer.unref(); // Не заважає закриванню сервера
timer.ref(); // Відновити не закривання сервера

/**
 * Even server is closed, requests in queue will be process
 */