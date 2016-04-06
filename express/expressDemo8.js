/**
 * Created by zhang on 2016/3/24.
 */
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
app.use(function(req,res,next){
    console.log(req.path)
    var path = "./public"+req.path;
    if(path.slice(path.length-1)){
        path+="index.html"
    }
    if(fs.existsSync(path)){
        fs.createReadStream(path).pipe(res);
    }else{
        next()
    }



})
app.get('/home',function(req,res){
    console.log('go home');
    res.end()
})
app.get('/',function(req,res){
    res.end();
})
app.listen(8080);
