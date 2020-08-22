const mongoose=require('mongoose');

var userdetails=new mongoose.Schema({
    username:{type:String,unique:true,required:true},
    password:String,
    email:String
});

module.exports=mongoose.model('userdetails',userdetails);