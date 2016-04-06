/**
 * Created by zhang on 2016/3/20.
 */
module.exports = {
    add:function(req,res,name){
        res.end('user add'+name);
    },
    delete:function(req,res,id){
        res.end('user deleter'+id);
    }
}