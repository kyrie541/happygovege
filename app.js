var express = require("express");  
var app = express();  

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

//landing page
app.get("/",function(req,res){
    res.render("landing");  
});

//login page
app.get("/login",function(req,res){
    res.render("login");  
});

app.listen(process.env.PORT, process.env.IP,function(){  
    console.log("Happy Go Vege has started!");
});
