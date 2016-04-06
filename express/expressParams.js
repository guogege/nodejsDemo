/**
 * Created by zhang on 2016/3/28.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res,next){
    fs.createReadStream('./post.html').pipe(res);
});
app.post('/post',function(req,res){
    console.log(req.body);
    res.send(req.body);
});
app.listen(8080);
