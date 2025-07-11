const http = require('http');

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hola Mundo</h1>');
    res.end('FIN');

});

server.listen(6666, () => {
    console.log('Se inicializó el servidor en puerto 6666');
})