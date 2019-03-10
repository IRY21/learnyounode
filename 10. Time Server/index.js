const net = require('net');
const strftime = require('strftime');

const port = process.argv[2];

const server = net.createServer((socket) => {
    let data = strftime('%Y-%m-%d %H:%M');
    socket.end(data + '\n');
})

server.listen(port);

// official solution
/* var net = require('net')

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var d = new Date()
    return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2])) */