const http = require('http');
const { Transform } = require('stream');

const upperCaseTr = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

const server = http.createServer((req, res) => {
    req.pipe(upperCaseTr).pipe(res);
});

server.listen(process.argv[2]);

// official solution
/* var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res) 
})

server.listen(Number(process.argv[2])) */