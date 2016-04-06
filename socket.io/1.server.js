/**
 * Created by zhang on 2016/3/30.
 */
var express = require('express');
var app = express();
app.get('/time',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
    res.end(new Date().toLocaleString());
})
app.get('/websockettime',function(req,res){
    res.end(new Date().toLocaleString());
})
app.listen(8080)
