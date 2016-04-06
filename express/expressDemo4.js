/**
 * Created by zhang on 2016/3/20.
 */
var myexpress = require('./myExpress');
var app = myexpress();
var path = require('path');
var http = require('http');

app.use('/mn',function(req,res,next){
    res.my=100;
    next()
})

app.use('/mn',function(req,res,next){
    res.my=res.my-10;
    next();
})

app.use('/mn',function(req,res,next){
    res.end(''+res.my);
})

http.createServer(app).listen(8080)