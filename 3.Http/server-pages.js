import http from "node:http";
import { readFile } from "fs/promises"

export const app = http.createServer(async (req, res) => {

    const {url, method} = req;

    if(url === "/" && method === "GET") {
        const page = await readFile('./Files/app.html', 'utf8');
        res.writeHead(200, {"content-type": "text/html"});
        res.end(page);
    } else {
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("404 Page not Found");
    }

});