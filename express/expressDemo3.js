/**
 * Created by zhang on 2016/3/20.
 */

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    var path = pathname.split('/');
    var handlerPath = './handler';
    var onOff = false
    for(var i=1;i<path.length;i++){
        handlerPath = handlerPath +'/'+ path[i];
        var exists = fs.existsSync(handlerPath);
        if(exists){
            var stat = fs.statSync(handlerPath);
            if(stat.isFile()){
                break;
            }
        }else{
            ///userdec/user
            if(onOff == false){
                console.log(1);
                path[i] = path[i]+'.js';
                handlerPath = handlerPath.slice(0,handlerPath.lastIndexOf('/'));
                i--;
                onOff = true;
            }else{
                return res.end('404');
            }

        }
    }
    var args = path.slice(i+2);
    var handler = require(handlerPath);
    var action = path[i+1];
    handler[action].apply(null,[req,res].concat(args))
}).listen(8080);
