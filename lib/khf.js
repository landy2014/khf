var path = require('path');
var util = require('util');

//define
var khf = module.exports;

khf.init = function(argv) {
    var cmd2 = argv[2];
    if (cmd2 === '-v' || cmd2 === '--version') {
       //Log.send('version');
        khf.version();
    }
}

//显示版本
khf.version = function() {
    var package = require('../package.json');
    console.log(package.version);
}
