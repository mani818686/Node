
var s="<table class='container myTable'>";
for(var i=1;i<=10;i++)
{
    s+="\n<tr>";
for(var j=(i-1)*10;j<i*10;j++)
{
s+="<td id="+(j+1)+">"+"</td>";
}
s+="</tr>"
}
s+="</table>";
console.log(s);
document.getElementById('draw').innerHTML=s;
var setcount=new Set();
function generate()
{   

   var x= Math.floor(Math.random() * 101); 
   document.getElementById('put').innerHTML=x;
   document.getElementById(x).innerHTML=x;
   setcount.add(x);
   if(setcount.size==101)
   {alert('Game Over! Play Again ');
   setcount.clear();
    }   
   
}
