if (!process.argv[2]) {
    console.log("Usage: node {program name} {file name}");
    return 1;
}

var fs = require('fs');

const file = fs.readFileSync(process.argv[2], 'utf8');

console.log(file.split('\n').length - 1);
