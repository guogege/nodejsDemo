/**
 * Created by zhang on 2016/3/6.
 */

var net = require('net');
var util = require('util');
var fs = require('fs');

var server = net.createServer();

server = net.createServer(function(socket){
    console.log(util.inspect(socket.address()));
    server.getConnections(function(err,count){
        server.maxConnections = 10
        console.log('现在有'+count+"用户连接上了");
        socket.setEncoding('utf8')
        socket.on('data',function(chunk){
            console.log(chunk);
            console.log('读取的字节数',socket.bytesRead);
        });
        socket.on('end',function(){
            console.log('客户端已关闭连接')
        })
    })
});
server.listen(8080,'localhost',function(){
    console.log('start listen at'+ util.inspect(server.address()));
})
