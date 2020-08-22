var express=require("express");

var router=express.Router();
var userdetailslib=require("./Backend/lib/userdetailslib");
router.get('/',function(req,res){
    userdetailslib.getAllUsers(function(err,userobj)
    {
        res.json(userobj);
    })
});
router.post('/', function(req, res){
    userdetailslib.createUser(req.body);
    res.redirect('/login');
});
router.post("/validate",function(req,res){
    userdetailslib.validate(req.body,function(err,result)
    {
        if(err)
        res.send(err);
        else if(req.body.password!=result[0].password)
        res.redirect("/");
        else
        res.redirect("/login");
    }
)})
module.exports=router;
