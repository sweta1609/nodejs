const http= require("http");
const server = http.createServer(function(req,res){
    if (req.url ==="/getSecret"){
        res.end("there is no secret")
    }
    res.end("hello world")
});
server.listen(8000);