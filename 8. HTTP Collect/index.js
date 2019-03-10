const http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
        console.log(rawData.length);
        console.log(rawData);
    });
}).on('error', console.error);


// official solution
/* var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
}); */
