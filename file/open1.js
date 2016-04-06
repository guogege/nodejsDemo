/**
 * Created by zhang on 2016/1/11.
 */
var fs = require('fs');
var buffer = new Buffer(3)
fs.open('2.txt','r',function(err,fd){
    //fs.read(fd,buffer,0,2,0,function(err,len,buffer){
    //    console.log(buffer.toString())
    //})
    console.log(fs.readSync(fd,buffer,0,3,0))
})
