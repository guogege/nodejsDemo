/**
 * Created by zhang on 2016/3/24.
 */
/**
 * Created by zhang on 2016/3/24.
 */
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var url = require('url');
app.use(express.static(path.join(__dirname,'public')))
app.get('/home',function(req,res){
    console.log(url.parse(req.url))
    console.log('go home');
    res.end()
})
app.get('/',function(req,res){
    res.end();
})
app.listen(8080);

