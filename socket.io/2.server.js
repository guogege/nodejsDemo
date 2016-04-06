/**
 * Created by zhang on 2016/3/30.
 */

var WevsocketServer = require('ws').Server;
var wss = new WevsocketServer({port:8080});
wss.on('connection',function(ws){
    ws.on('message',function(message){
        console.log('received:%s',message);
        ws.send('hello client');
    })
    setInterval(function(){
        ws.send(new Date().toLocaleString())
    },1000)
})

wss.on('close',function(){
    console.log('close');
})