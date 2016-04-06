/**
 * Created by zhang on 2016/3/7.
 */
var http = require('http');
var url = require('url')
var server = http.createServer();
server.on('request',function(req,res){
    req.url="http://zfpx:12345@localhost:8080/index/index.html?name=zfpx#top"
    res.setHeader('name','zhangzhang');
    var urlObj = url.parse(req.url,true);
    console.log(req.url);
    console.log(urlObj);
    res.statusCode = 404;
    res.end(http.STATUS_CODES[404]);
})
server.listen(8080);

