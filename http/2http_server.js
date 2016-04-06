/**
 * Created by zhang on 2016/3/7.
 */

var http = require('http');
var url = require('url');
var util = require('util');
var queryString = require('querystring');

var server = http.createServer(function(req,res){
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    res.write('hello');
    res.end();
})

server.listen(8080)