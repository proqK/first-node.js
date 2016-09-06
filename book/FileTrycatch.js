var fs = require('fs');
var data = "hello world";

try{ //파일 읽기
    var data = fs.readFileSync('text.txt', 'utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

try{ //파일 쓰기
    fs.writeFileSync('text.txt', 'Hello world', 'utf8');
    console.log('File complete');
} catch (e) {
    console.log(e);
}