/**
 * Created by zhang on 2016/3/21.
 */
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    console.dir(res.end);
    var end = res.end;
    res.end = function(data){
        var length = data.length;
        var log = req.method+' '+req.url+' '+new Date().toUTCString()+' '+length+' '+data+'\r\n';
        fs.appendFileSync('log',log);
        end.apply(res,Array.prototype.slice.call(arguments,0));
       // end('111')
    }
    next();
})
app.all('/home',function(req,res,next){
    res.end('我想回家');
})

app.listen(8080);