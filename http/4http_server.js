/**
 * Created by zhang on 2016/3/7.
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');
var server = http.createServer();
server.on('request',function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname =="/"){
        fs.createReadStream('./1demo.html').pipe(res);
    }else if(pathname == '/post'){
        var result = []
        req.on('data',function(chunk){
          result.push(chunk);
        });
        req.on('end',function(){
            var body = Buffer.concat(result).toString();
            var bodyObj = querystring.parse(body);
            console.log(bodyObj);
            res.end(JSON.stringify(bodyObj))
            //res.end(body);
        })
    }
})
server.listen(8080);

