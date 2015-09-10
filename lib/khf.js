var path = require('path');
var util = require('util');

//define
var khf = module.exports;

jdf.init = function(argv) {
    var cmd2 = argv[2];
    if (cmd2 === '-v' || cmd2 === '--version') {
        Log.send('version');
        khf.version();
    }
}

khf.version = function() {
    console.log("hello, world!");
}
