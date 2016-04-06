/**
 * Created by zhang on 2016/1/13.
 */
var obj ={};
obj.start = function(callback){
    return callback(5)
}
console.log(obj.start(function(stat){

}))
function obj1(){
    this.name=111;
}
obj1.prototype.say = function(name){
   console.log(name)
    return name
}
var p = new obj1()
console.log(p.say('zhang'))