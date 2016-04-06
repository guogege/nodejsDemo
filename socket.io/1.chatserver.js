/**
 * Created by zhang on 2016/3/30.
 */

var  path = require('path');
var express = require('express');
var app = express()
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.set('view engine','html');
app.set('views',path.resolve(__dirname,'views'));
app.engine('html',require('ejs').__express);
app.use(express.static(path.resolve(__dirname,'public')));
app.use(express.static(__dirname));

app.get('/ff',function(req,res){
    res.render('index');
})
var users = {};
//监听客户端的请求
io.on('connection',function(socket){
    console.log(1);
    //监听客户端发来的消息
    var username;
    socket.send({user:'SYSTEM',content:'请输入昵称'})
    socket.on('message',function(msg){
        if(username){
            //var result = msg.match(/^\@(\w+)\s*\(w+)/);
            var result = msg.match(/^@(.+)\s(.*)/);
            if(result){
                var result
                var toUser = result[1];
                var content = result[2];
                if(users[toUser]){
                    users[toUser].send({user:username,content:content});
                }else{
                    socket.send({user:'系统',content:'你要私聊的人不在线'})
                }
            }else{
                io.send({user:username,content:msg});
            }
        }else{
            username = msg;
            users[username] = socket;
            io.send({user:'system',content:'欢迎<span class="user">'+username+'</span>加入聊天室'})
        }
        //io.send('message',msg);//向客户端发送消息
    })
})

server.listen(8080)
