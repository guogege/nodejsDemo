/**
 * Created by zhang on 2016/3/29.
 */
var express = require('express');
var app = express();
var fs = require('fs');
app.set('view engine','html');
app.set('views','./views');
app.engine('html',require('ejs').__express);

app.get('/',function(req,res){
    res.render('index');
})
app.get('/del',function(req,res){
    res.render('user/delete')
})
//app.get('/add',function(req,res){
//    res.render('user/add',{username:'zfpx',upper:function(str){
//        return str.toUpperCase();
//    }});
//})
app.get('/add',function(req,res){
  render('user/add',{username:'zfpx'},res);
})
app.listen(8080);

function render(path,data,res){
    var tmpl = fs.readFileSync(app.get('views')+'/'+path+'.'+app.get('view engine'),'utf8');
    console.log(tmpl);
    var result = tmpl.replace(/<%=([\s\S]+?)%>/g,function(march,code){
        return data[code];
    })
    res.end(result);
}