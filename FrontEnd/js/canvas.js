var c=document.getElementById('Canvas');
var ctx=c.getContext("2d");
const circle={
    x:200,
    y:200,
    dx:5,
    dy:5;
}
function drawcircle()
{
ctx.drawcircle(x,y,50,0,2*Math.PI);
ctx.stroke();
}