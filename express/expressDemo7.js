/**
 * Created by zhang on 2016/3/22.
 */
var express = require('express');
var app = express();
var path = require('path');

app.get('/home',function(req,res){
    console.log(req.host);
    console.log(req.path);
    res.end('ok')
})

app.listen(8080);
