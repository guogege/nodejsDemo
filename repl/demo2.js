/**
 * Created by zhang on 2015/12/13.
 */
var repl = require('repl');
var server = repl.start({});
//上下文就是个对象
var context = server.context;
context.name='zfpx';
context.age=6;
context.grow = function(num){
    console.log(context.name+'grow'+num);
}

