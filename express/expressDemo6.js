/**
 * Created by zhang on 2016/3/22.
 */
var express = require('express');

var router = express.Router();

router.get('/add',function(req,res){
    console.log(arguments.length)
    console.log('user add');
    res.end('user add');
})

router.post('/delete',function(){
    console.log('user delete')
});
module.exports = router;