/**
 * Created by zhang on 2016/3/29.
 */
var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views','./views');

app.get('/',function(req,res){
    res.render('index');
})
app.get('/del',function(req,res){
    res.render('user/delete')
})
app.listen(8080);