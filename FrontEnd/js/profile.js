$(document).ready(function(){
    $.ajax({
        url: '/user',
        method: 'GET'
    })
    .then(function(result){
        //console.log(result[0].username+" "+result.length);
        if(result.length==0)
            $(".username").text("");
        else{
            $(".username").text(result[0].username);
        }
          
    })
})


function display()
{
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