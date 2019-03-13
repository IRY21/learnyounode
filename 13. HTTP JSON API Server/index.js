const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true);
    const dateQuery = new Date(reqUrl.query.iso);
    let dateResult;

    if (reqUrl.pathname === '/api/parsetime') {
        dateResult = {
            "hour": dateQuery.getHours(),
            "minute": dateQuery.getMinutes(),
            "second": dateQuery.getSeconds()
        };
    }
    
    if (reqUrl.pathname === '/api/unixtime') {
        dateResult = {
            "unixtime": dateQuery.getTime()
        };
    }

    if(dateResult) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(dateResult));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(Number(process.argv[2]));


// official solution
/* var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2])) */
