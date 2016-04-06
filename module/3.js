/**
 * Created by zhang on 2015/12/14.
 */
function person(name){
    this.name = name;
}
person.prototype.getName = function(){
  return this.setName = '111';
}
person.prototype.name = 'sheng';
module.exports = person;