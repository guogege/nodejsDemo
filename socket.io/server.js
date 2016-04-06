/**
 * Created by zhang on 2016/3/30.
 */
var io = require('socket.io')();
io.on('connection',function(socket){
    console.log('连接成功');
});
io.on('disconnect',function(){
    console.log('用户已经离开')
});
io.listen(8080);
