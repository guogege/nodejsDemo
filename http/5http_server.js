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
        var result = [];
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fileds,files){
            console.log(files.file.path)
            fs.createReadStream(files.file.path).pipe(fs.createWriteStream('./file/'+files.file.name));
            res.setHeader('Content-Type','text/html');
            res.write('<h1>'+fileds.username+'</h1>');
            res.write('<h1>'+fileds.password+'</h1>')
            res.write("<img src=./file/"+files.file.name+">")
            res.end();
        })
    }else{
        fs.exists('.'+pathname,function(exists){
            if(exists){
                console.log(1);
                fs.createReadStream('.'+pathname).pipe(res)
            }else{
                res.statusCode = 404;
                res.end(http.STATUS_CODES[404])
            }
        })
    }

})
server.listen(8080);

