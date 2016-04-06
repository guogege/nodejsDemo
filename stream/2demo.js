/**
 * Created by zhang on 2016/3/2.
 */

var fs  = require ('fs');
fs.writeFile('1.txt',new Buffer(1024*10),{encoding:'utf8'})