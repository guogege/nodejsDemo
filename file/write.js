/**
 * Created by zhang on 2016/1/11.
 */
var fs = require('fs');
fs.writeFile('1.txt',new Buffer('张张伟国'),{flag:'a',encoding:'utf8'},function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log('success');
    }
})
//fs.appendFile('1.txt',new Buffer('洁洁'),{flag:'w',encoding:'utf8'},function(err,data){
//    if(err){
//
//    }else{
//        console.log('success');
//    }
//})