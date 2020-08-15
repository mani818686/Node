var express=require('express');
var app=express();
app.use(express.json());
app.use(express.urlencoded())
var userLib=require('./userlib')
var db=require('./Backend/db/dbconnect');
db.connect();
app.use(express.static(__dirname+'/FrontEnd/'))
var port=process.env.PORT||3000;

app.get('/',function(req,res)
{
    res.sendFile(__dirname+'/FrontEnd/html/index.html');
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
    console.log(req.body);
    res.redirect('/html/userdetails.html');
}); 
app.listen(port,function()
{
    console.log("site running on localhost "+port);
})
