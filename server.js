var http = require("http");
var fs = require("fs");
var app = http.createServer(function(req,res) { //test용 서버
    var url = req.url;
    if(url == '/'){
        url = '/main.html';
    }
    if(url == '/favicon.ico')
        return res.writeHead(404);
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
});
app.listen(3000); //포트번호