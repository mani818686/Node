var express=require('express');
var app=express();
app.use(express.static(__dirname+'/FrontEnd/'))
var port=process.env.PORT||3000;
app.get('/',function(req,res)
{
    res.sendFile('html/index.html');
})
app.listen(port,function()
{
    console.log("site running on localhost "+port);
})