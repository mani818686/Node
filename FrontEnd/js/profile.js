
$(document).ready(function(){
    var username=window.localStorage.getItem("username");
    username=JSON.parse(username);
    if(!username){
    $.ajax({
        url: '/user',
        method: 'GET'
    })
    .then(function(result){
        window.localStorage.setItem("username",JSON.stringify(result[0].username));
        if(result.length==0)
            $(".username").text("");
        else{
            $(".username").text(result[0].username);
        }
        
    })}
  else
{   console.log("local storage")
    $(".username").text(username);
}
})



function display()
{
    window.localStorage.removeItem("username");
    $(".username").text("");
        window.location = '/login';
        $.ajax({
            url: '/user/logout',
            method: 'POST'
        })
        .then(function(result){
            
            window.location.redirectUrl = result.redirectUrl;
        })
}