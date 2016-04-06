/**
 * Created by zhang on 2016/3/7.
 */

var net = require('net');
var util = require('util');
var fs = require('fs');
//net.Socket Ë«¹¤Á÷ Duplux
var ws = fs.createWriteStream('./socket.txt');
var server = net.createServer({allowHalfOpen:true},function(socket){
    socket.setTimeout(3*1000);
    socket.on('timeout',function(){
        console.log('³¬Ê±')
        socket.resume();
        socket.pipe(ws,{end:false});
        ws.write(socket.remoteAddress)
    });

})
server.on('error',function(err){
    console.log(err);
});
server.listen(8080,function(){
    console.log(util.inspect(server.address()));
});
