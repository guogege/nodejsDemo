/**
 * Created by zhang on 2015/12/17.
 */
require("./dog.js")
console.log(require.resolve('./dog.js'));
console.log(111111111111111111111)
delete require.cache[require.resolve('./dog.js')];
console.log(Object.keys(require.cache))