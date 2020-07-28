var express=require('express');
app=express()

app.get('/',function(req,res)
{
    res.send('Hello World');
})
var port=process.env.PORT||3000;

app.listen(port,function()
{
    console.log("site running on localhost "+port);
})