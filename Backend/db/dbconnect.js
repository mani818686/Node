const mongoose=require('mongoose');

module.exports={
    connect : function(){
        var optionsJSON = {   useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true };
        mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0.vsbgp.mongodb.net/user?retryWrites=true&w=majority', optionsJSON);
        
        var connectionObj = mongoose.connection;

        connectionObj.on('connected', function(){
            console.log("CONNECTED TO DB");
        })
        connectionObj.on('disconnected', function(){
            console.log("DISCONNECTED FROM DB");
        })

        connectionObj.on('error', function(err){
            console.log("ERROR: "+err);
        })
    },
    disconnect : function(){
        mongoose.disconnect();   
    }
}

