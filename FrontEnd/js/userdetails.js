 function showdata()
 {
    $.ajax({
        url: "/api/user",
        method: "GET",
        success: function(result) {
            var r="<table>";
            r+="<tr>"
            r+="<td>"+"Username"+"</td>";
            r+="<td>"+"Age"+"</td>";
            r+="<td>"+"email"+"</td>";
            r+="</tr>";
            for(var row in result)
            {   r+="<tr>";
                r+="<td>"+row.username+"</td>";
                r+="<td>"+row.age+"</td>";
                r+="<td>"+row.email+"</td>";
                r+="</tr>";
            }
            r+="</table>";
            $("#table").html(r);
        },
        error: function(err) {
          console.log(err);
        }
      });
      
         
 }
 showdata();