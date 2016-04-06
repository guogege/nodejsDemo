/**
 * Created by zhang on 2016/3/20.
 */
var url = require('url');
var http = require('http');
http.createServer(function(req,res){
    console.log(req.url);
    if(req.url != '/favicon.ico'){
        var pathname = url.parse(req.url).pathname;
        var paths = pathname.split('/');
        var controller = paths[1];
        var handler = require('./handler/'+controller);
        var action = paths[2];
        var args = paths.slice(3);
        handler[action].apply(null,[req,res].concat(args));
    }

}).listen(8080);

