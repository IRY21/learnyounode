const http = require('http');
const bl = require('bl');

let connections = [];
const argc = process.argv.length;

for (let i = 0; i < argc - 2; i++) {
    connections[i] = new Promise((resolve, reject) => {
        http.get(process.argv[i+2], (res) => {
            res.pipe(bl(function (err, data) {
                if (err) {
                    return console.error(err);
                }
                resolve(data.toString());
            }));
        }).on('error', (err) => {
            reject(err);
        });
    });
}
Promise.all(connections).then((data) => {
    data.forEach((item) => {
        console.log(item);
    });
})

// official solution
/* var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
 */