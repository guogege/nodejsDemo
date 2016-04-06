/**
 * Created by zhang on 2016/1/16.
 */
    var person = {
        name:'zhang',
        age:'112',
        say:function(words){
            console.log(this.name +'say'+ words);
        }
}

var p = {
        name:"123"
}
//var arr={ '0': { name: '123' }, '1': 'zhang' };
//var arr=[123,456]
//console.log(arr.slice(1));
//person.say.call(p,'hello');
//var news = person.say.bind(p,'hello');
//var m = person.say.bind(p,'mine')
//person.say.call(p,'hello');
////console.log(p.age);
//news()
//person.call(p);
Function.prototype.b = function(obj){
    var self=this;
    var args = Array.prototype.slice.call(arguments,1);
    console.log('b'+args);
    return function(){
        self.call(obj,args);
    }
}
var news=person.say.b(p,'zhang');
news()
