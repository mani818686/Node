const userdetails=require("../models/userdetails");
module.exports={
    createUser:function(userobject,cb){

        var user=new userdetails(userobject,cb);
        user.save();
    },
    getAllUsers : function(cb){
        userdetails.find({},function(err,allusers){
             cb(err,allusers);
        }
        )
    },
    validate: function(userobj,cb){
        var query={username:userobj.username};
        userdetails.find(query,function(err,result){
            //console.log(result);
            cb(err,result);
        })
    }
}