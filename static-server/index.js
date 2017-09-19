const util = require("util");
const http = require("http");
const url = require("url");
const fs = require("fs");
const mime = require("mime-types");

const port = parseInt(process.argv[2], 10) || 1337;
const dir = "public";

const fsExists = util.promisify(fs.exists);
const fsReadFile = util.promisify(fs.readFile);

http.createServer(async (req, res) => {
    console.log(`${req.method}: ${req.url}`);
    const path = `${dir}${url.parse(req.url === "/" ? "/index.html" : req.url).pathname}`;
    const exists = await fsExists(path);
    if (!exists) {
        res.statusCode = 404;
        res.end(`File ${path} not found!`);
        return;
    }
    try {
        const data = await fsReadFile(path);
        res.setHeader('Content-Type', mime.lookup(path));
        res.end(data);
    } catch (e) {
        res.statusCode = 500;
        res.end(e.toString());
    }
}).listen(port);

console.log(`Listening on port ${port}...`);
