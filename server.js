var express=require('express');
var app=express();
app.get('/',function(req,res)
{
    res.send('Hello World');
})
app.use(express.static(__dirname+'/FrontEnd/'))
var port=process.env.PORT||3000;
app.listen(port,function()
{
    console.log("site running on localhost "+port);
})