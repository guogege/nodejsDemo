/**
 * Created by zhang on 2016/3/16.
 */
var http = require('http');
var url = require('url');

var  handlers = {
        user:{
            add:function(req,res,name){
                res.end('user add'+name);
            },
            delete:function(req,res,id){
                res.end('user deleter'+id);
            }
        }
}

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    if(pathname !='/favicon.ico'){
        var paths = pathname.split('/');
        console.log(paths);
        var query = paths[1];
        var action = paths[2];
        var args = paths.splice(3);
        if(handlers[query]&&handlers[query][action]){
            var handler = handlers[query][action]
            handler.apply(null,[req,res].concat(args));
        }else{
            res.end('404');
        }

    }

}).listen(8080)