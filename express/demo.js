/**
 * Created by zhang on 2016/3/16.
 */
function person(name){
    console.log(2)
}

function student(){
    console.log(2)
    person.call(this,'zhang');
}
var s = new student()