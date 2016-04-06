/**
 * Created by zhang on 2016/3/20.
 */

module.exports = myexpress;

function app(req,res){
    app.handle(req,res);
}

function myexpress(){
    app.stack = [];
    return app;
}

app.use = function(path,fn){
    if(typeof path == 'function'){
        fn = path;
        path = '/';
    }
    this.stack.push({path:path,handle:fn})
}
//把所有的中间件取出来
app.handle = function(req,res){
    var index = 0;
    var stack = this.stack;
    function next(){
        var layer = stack[index++];
        if(!layer){
            return;
        }
        var url= req.url || '/';//请求的路径
        var path = layer.path;//得到此中间件路径
        if(url.indexOf(path) == 0){
            layer.handle(req,res,next)
        }else{
            next();//如果不匹配，执行下一个中间件
        }
    }
    next();
}