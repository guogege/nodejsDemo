/**
 * Created by zhang on 2016/3/29.
 */
var fs = require('fs');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.set('view engin','html');
app.set('views','./views');
app.engine('html',require('ejs').__express);
app.use(cookieParser());

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpxkey',
    cookie:{
        maxAge:1000*10
    }
}))
app.get('/reg',function(req,res){
    req.session.username = 'zhangsan';
    res.end('success');
})
app.get('/home',function(req,res){
    res.end(req.session.username)
})
app.get('/',function(req,res){
    res.render('index');
})
app.get('/del',function(req,res){
    res.render('user/delete')
})
app.listen(8080);
