var express=require("express");
var router=express.Router();
var userdetailslib=require("./Backend/lib/userdetailslib");
router.get('/',function(req,res){
    var query={'_id':req.session.userid};
    userdetailslib.getAllUsers(query,function(err,userobj)
    {
        res.json(userobj);
    })
});
router.post('/', function(req, res){
    userdetailslib.createUser(req.body,function(err,result)
    {
        req.session.userid=result._id;
        res.redirect('/login');
    });
    
});
router.post("/validate",function(req,res){
    userdetailslib.validate(req.body,function(err,result)
    {   if(result.length!=0)
            req.session.userid=result[0]._id;
        if(err)
        res.send(err);
        else if (result.length==0)
        res.redirect("/login");
        else
        res.redirect('/profile');
    }
)})
router.post('/logout',function(req,res){
    if(req.session.userid)
        req.session.destroy();  
        res.redirect({redirectUrl:'/login'}); 
        //res.redirect('/login');
})
module.exports=router;
