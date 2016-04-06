/**
 * Created by zhang on 2016/3/6.
 */

var http = require('http');
var url = require('url')
var server = http.createServer();
server.on('connection',function(){
    console.log('连接建立')
})
server.on('request',function(req,res){
    console.log(req.url)
    res.end('hello')
})
server.listen(8080)
