import http from "node:http";

export const app = http.createServer((req, res) => {

    const { url, method } = req;
    
    if ( url === "/api/test" && method === "POST") {        
        let body = '';

        req.on("data", (chuck) => {
            body += chuck.toString();
        });

        req.on("end", () => {
            const data = JSON.parse(body);
            res.writeHead(200, {"content-type": "application/json"});
            res.end(JSON.stringify({status: 'ok', received: data}));
        });

    } else {
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("Ruta no encontrada");
    }

});