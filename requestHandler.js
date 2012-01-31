function start () {
    console.log ("Request handler 'start' was called.");
}

function upload () {
    console.log ("Request handler 'upload' was called.");
}

function fail () {
    console.log ("Request Failed!");
}

exports.start = start;
exports.upload = upload;
exports.fail = fail;
