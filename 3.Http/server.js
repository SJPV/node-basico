import http from "node:http";


export const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write("<h1>Usando res.write</h1>");    
    res.end("END");    
});