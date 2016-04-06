/**
 * Created by zhang on 2016/3/6.
 */

var net = require('net');
var util = require('util');
var fs = require('fs');

var server = net.createServer();
var out = fs.createWriteStream('out.txt')
server = net.createServer(function(socket){
    console.log(util.inspect(socket.address()));
    server.getConnections(function(err,count){
        server.maxConnections = 10
        console.log('现在有'+count+"用户连接上了");
        socket.setEncoding('utf8')
        //socket.on('data',function(chunk){
        //    console.log(chunk);
        //    console.log('读取的字节数',socket.bytesRead);
        //});
        //socket.on('end',function(){
        //    console.log('客户端已关闭连接')
        //})
        socket.on('data',function(data){
            console.log(22);
            socket.pause();
        })

        socket.setTimeout(3000,function(){
            console.log(11)
            console.log('端口超时');
            socket.resume();
            socket.pipe(out,{end:false});
        })

        //只有当客户端主动关闭时才会触发
        socket.on('end',function(){
            out.end('over');
        })
        //无论客户端以什么方式关闭都会触发
        //socket.on('close',function(){
        //
        //})
        ////当所有客户端关闭时触发关闭服务器
        //socket.unref('unref',function(){})
    })
});
server.listen(8080,'localhost',function(){
    console.log('start listen at'+ util.inspect(server.address()));
})
