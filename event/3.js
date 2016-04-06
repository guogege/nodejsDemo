/**
 * Created by zhang on 2016/1/16.
 */

function Person(name,age){
    this.name="zhang";
    console.log(name+""+age);
}
function coder(){

}
console.log(coder);
Person.apply(coder,['zhang','12']);
var obj={
    name:function(){
        console.log(222);
    }
}
var say="say";
var fuc= function(){
    console.log('3333');
}
obj[say]=[fuc]
console.log(obj[say]);


