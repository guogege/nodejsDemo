/**
 * Created by zhang on 2016/1/11.
 */
var fs = require('fs');
var buffer = new Buffer(3)
fs.open('1.txt','r',function(err,fd){
    fs.read(fd,buffer,0,3,1,function(err,length,buf){
        console.log(buf.toString())
    })
})