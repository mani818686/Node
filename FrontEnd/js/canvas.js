var canvas=document.getElementById("Canvas");
var ctx=canvas.getContext("2d");
/*ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height/2,220, 0, 2 * Math.PI);
ctx.stroke();*/

var x=200,y=300,r=9;
function drawcircle()
{
ctx.beginPath();
ctx.arc(x,y,r,0,Math.PI*2);
ctx.fillStyle="purple";
ctx.fill();
}
function update()
{   ctx.clearRect(0,0,canvas.width,canvas.height);

    x+=5;
    y+=2;
    drawcircle();
    
    console.log("HIT");
    requestAnimationFrame(update);
}
update();