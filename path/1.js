/**
 * Created by zhang on 2016/1/13.
 */
var path = require('path');
var fs = require('fs');
console.log(path.normalize('.//a////b//d//..//c/e/'))
console.log(path.join(__dirname,'a','b','..','c'))
fs.readdir(__dirname,function(err,file){
    console.log(fs.stat(path.join(__dirname,file[1]),function(err,stat){}))
  //fs.stat(path.join(__dirname,file[1]),function(err,stat){
  //     if(!stat.isDirectory()){
  //  fs.readFile(path.join(__dirname,file[1]),function(err,data){
  //             console.log(data.toString());
  //         })
  //     }
  // })

})
//console.log(path);

console.log(path.basename('path.js','.js'));
console.log(path.extname('path.js'))
console.log(path.resolve('/a/b','c'))