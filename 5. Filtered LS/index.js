if (!process.argv[2]) {
    console.log("Usage: node {program name} {filter ext}");
    return 1;
}

const fs = require('fs');
const path = require('path');

const ext = `.${process.argv[3]}`;

fs.readdir(process.argv[2], function (err, data) {
    if (err) return console.error(err);
    
    data.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    })
});