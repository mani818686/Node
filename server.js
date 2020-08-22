var express=require('express');
var app=express();
var userLib=require('./Backend/lib/userlib')
var db=require('./Backend/db/dbconnect');
var apiroutes=require("./apiroutes");
app.use(express.json());
app.use(express.urlencoded())
db.connect();
app.use(express.static(__dirname+'/FrontEnd/'))
var port=process.env.PORT||3000;

app.get('/',function(req,res)
{
    res.sendFile(__dirname+'/FrontEnd/html/index.html');
})
app.get('/:pagename',function(req,res)
{
    var pagename=req.params.pagename;
    res.sendFile(__dirname+'/FrontEnd/html/'+pagename+'.html');
})

app.get('/api/user',function(req,res)
{
     userLib.getAllUsers(function(err, arrayOfUsers){
        res.json(arrayOfUsers);
     })
})
app.post('/api/user',function(req,res)
{
    userLib.createUser(req.body)
    //console.log(req.body);
    res.redirect('/html/userdetails.html');
}); 
app.use('/user',apiroutes);
app.listen(port,function()
{
    console.log("site running on localhost "+port);
})
