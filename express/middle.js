/**
 * Created by zhang on 2016/3/15.
 */
var url = require('url');
var http = require('http');
function createApplication(){
    console.log(1);
    var app = function(req,res){
        var pathname = url.parse(req.url).pathname;
        for(var i=0;i<app.routes.length;i++){
            var route = app.routes[i];
            if(pathname == route[0]){
                var action = route[1];
                action(req,res);
            }
        }
    }
    app.routes = []
    app.use = function(path,action){
        app.routes.push([path,action]);
    }
    return app;
}
var app = createApplication();
app.use('/',function(req,res){
    res.end('I am /');
});
app.use('/hello',function(req,res){
    res.end('I am /hello');

})
http.createServer(app).listen(8080);