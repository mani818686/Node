var express=require('express');
var app=express();
var mongoose=require("mongoose");
var session=require("express-session");
const MongoStore=require("connect-mongo")(session);
var userLib=require('./Backend/lib/userlib')
var db=require('./Backend/db/dbconnect');
var apiroutes=require("./apiroutes");
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
db.connect();
app.use(express.static(__dirname+'/FrontEnd/'))
var port=process.env.PORT||3000;

app.use(session({
    secret: 'this is a secret',
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(function(req, res, next){
    console.log("SESSION: "+JSON.stringify(req.session));
    next();
})

app.get('/profile',function(req,res,next){
    if(!req.session.userid)
    {
        res.redirect('/login');
    }
    next();
       
})





app.use('/user',apiroutes);

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
    res.redirect('/html/userdetails.html');
}); 

app.listen(port,function()
{
    console.log("site running on localhost "+port);
})
