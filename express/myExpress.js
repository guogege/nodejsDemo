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
//�����е��м��ȡ����
app.handle = function(req,res){
    var index = 0;
    var stack = this.stack;
    function next(){
        var layer = stack[index++];
        if(!layer){
            return;
        }
        var url= req.url || '/';//�����·��
        var path = layer.path;//�õ����м��·��
        if(url.indexOf(path) == 0){
            layer.handle(req,res,next)
        }else{
            next();//�����ƥ�䣬ִ����һ���м��
        }
    }
    next();
}