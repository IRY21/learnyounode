if (!process.argv[2]) {
    console.log("Usage: node {program name} {file name}");
    return 1;
}

const fs = require('fs');


fs.readFile(process.argv[2], function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log(data.toString().split('\n').length - 1);
});