const userdetails=require("../models/userdetails");
module.exports={
    createUser:function(userobject,cb){
        var user=new userdetails(userobject);
        user.save(function(err,result)
        {
            cb(err,result);
        });
    },
    getAllUsers : function(query,cb){
        userdetails.find(query,function(err,allusers){
             cb(err,allusers);
        }
        )
    },
    validate: function(userobj,cb){
        userdetails.find(userobj,function(err,result){
            cb(err,result);
        })
    }
}