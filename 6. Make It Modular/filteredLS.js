const fs = require('fs');
const path = require('path');

function filteredLS(directory, extension, callback) {
    let filter = false;
    let ext = null;

    if (extension != undefined) {
        ext = `.${extension}`;
        filter = true;
    }
    
    fs.readdir(directory, function (err, data) {
        if (err) return callback(err);
        
        data.forEach(function (file) {
            if (path.extname(file) === ext) {
                callback(null, file);
            } else if (!filter) {
                callback(null, file);
            }
        })
    });
}

module.exports = filteredLS;