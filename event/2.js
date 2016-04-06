/**
 * Created by zhang on 2016/1/16.
 */
function Event(name){
    this.name=name;
    this._events = {};
}
Event.prototype.on = function(eventName,listener){
    if(this._events[eventName]){
        console.log('zouzhe')
        this._events[eventName].push(listener);
        console.log(this._events[eventName])
    }else{

        this._events[eventName]=[listener];
        console.log(this._events[eventName])
    }
}
Event.prototype.emit = function(eventName){
    var handler = this._events[eventName];
    var args = Array.prototype.slice.call(arguments,1);
    for(var i=0;i<handler.length;i++){
        handler[i].apply(this,args);
    }
}
var teacher = new Event('teacher');
var me = function(name){
    console.log('I beat'+name);
}
//teacher.on('fight',function(name){
//    console.log('beat it'+name);
//})
var wife = function(name){
    console.log('wife beat'+name);
}

//teacher.on('fight',function(name){
//    console.log('wife beat it'+name);
//})
//teacher.removeListener('fight',wife);
teacher.emit('fight','zhang');