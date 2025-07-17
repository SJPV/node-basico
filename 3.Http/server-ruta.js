import http from 'node:http';

export const app = http.createServer((req, res) => {

    const { url, method } = req;
    
    if (url === "/" && method === "GET") {
        res.writeHead(200, {"content-type": "text/html"});
        res.end("<h1>Página de Inicio/<h1>");
    } else if(url === "/about" && method === "GET") {
        res.writeHead(200, {"content-type": "text/html"});
        res.end("<h1>Sobre Nosotros/<h1>");
    } else {
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("404 Not Found");
    }


});