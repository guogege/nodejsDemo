/**
 * Created by zhang on 2016/3/28.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());
app.use(function(req,res,next){

    var form;
    req.setEncoding('utf8')
    req.on('data',function(data){

        form = data;
    })
    req.on('end',function(){
        req.body = require('querystring').parse(form);
        next()
    })

})

app.get('/',function(req,res,next){
    fs.createReadStream('./post.html').pipe(res);
});
app.post('/post',function(req,res){
    console.log(req.body);
    res.send(req.body);
});
app.listen(8080);
