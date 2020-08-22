function myfunction(){

    form_data={
        'username':$('input[name=username]').val(),
        'password':$('input[name=password]').val()
    }
    console.log(form_data);
    window.location.replace('/');
}
     
