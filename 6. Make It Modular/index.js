if (!process.argv[2]) {
    console.log("Usage: node {program name} {filter ext}");
    return 1;
}

const filterLS = require('./filteredLS.js');
const directory = process.argv[2];
const extension = process.argv[3];

function callback(err, data) {
    if (err) return console.error(err);

    console.log(data);
}

filterLS(directory, extension, callback);