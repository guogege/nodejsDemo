/**
 * Created by zhang on 2016/1/11.
 */
var fs = require('fs');
fs.open('1.txt','r+',function(err,fd){
    fs.write(fd,new Buffer([65,66]),1,1,2,function(err,bytes,buff){
        console.log();
    })
})