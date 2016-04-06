/**
 * Created by zhang on 2016/3/28.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json());
//app.use(function(req,res,next){
//
//    var form;
//    req.setEncoding('utf8')
//    req.on('data',function(data){
//
//        form = data;
//    })
//    req.on('end',function(){
//        req.body = require('querystring').parse(form);
//        next()
//    })
//
//})
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/upload')
    },
    filename:function(req,file,cb){
        //cb(null,file.fieldname+'-'+Date.now());
        cb(null,file.originalname)
    }
})
var upload = multer({storage:storage})
app.get('/',function(req,res,next){
    fs.createReadStream('./post.html').pipe(res);
});
app.post('/post',upload.fields([{name:'avatar1',maxCount:1},{name:'avatar2',maxCount:2}]),function(req,res){
    console.log(req.body);
    res.send(req.body);
});
app.listen(8080);
