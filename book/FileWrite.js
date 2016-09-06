var fs = require('fs');
var data = "hello world";

fs.writeFileSync('text.txt', data, 'utf8', function (error) {
    console.log('write file complete');
});