let http=require("http");

http.createServer(function(req,res){
    res.setHeader("Content-Type","application/json");

    if (req.url=="/"){
        res.write("home")
    }
    else if((req.url="/login")){
        res.write("Login")
    }
    else if((req.url="/about")){
        res.write("About page")
    }
    res.end();
})
.listen(8080)