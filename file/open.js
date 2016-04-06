/**
 * Created by zhang on 2016/1/11.
 */
var fs = require('fs');

fs.open('2.txt','r',function(err,fd){
    console.log(fd);
})
fs.open('1.txt','r',function(err,fd){
    fs.read
})