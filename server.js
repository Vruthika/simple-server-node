var http = require("http");
var fs = require("fs");
var path = require("path");
var filepath = "";
var f = false;
http.createServer((req, res) => {

    if (req.url == '/' || req.url == "/home") {
        filepath = path.join(__dirname, 'httphome.html');
        f = true;
    }
    else if (req.url == '/admin') {
        filepath = path.join(__dirname, 'httpadmin.html');
        f = true;
    }
    else if (req.url == '/user') {
        filepath = path.join(__dirname, 'httpuser.html');
        f = true;
    }
    else {

        res.writeHead(404);
        res.end('Page not found!');
    }
    if (f) {
        fs.readFile(filepath, 'utf-8', (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
            }
            else {
                res.writeHead(200, { "content-type": "text/html" });
                res.end(content);
            }
        });
    }
}).listen(3100);
console.log("Server is running in port 3100.....")