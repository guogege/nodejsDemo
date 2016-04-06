/**
 * Created by zhang on 2016/3/22.
 */
var express = require('express');
var app = express();

app.use('/user',function(req,res,next){
    console.log('中间件1')
    next();
});
app.use('/user',function(req,res,next){
    console.log('中间件2')
    next();
})
app.use('/user',require('./expressDemo6'))

app.use('/user',function(req,res,next){
    console.log('中间件3')
})
app.listen(8080);