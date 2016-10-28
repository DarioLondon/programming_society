//Require Module
var http=require('http');

//Create Server
http.createServer(function(req,res){
    //Listening for request and then send the response
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("hello world");
    //Close the response
    res.end();
 //Setting port
}).listen(3000,'127.0.0.1');
//Logging out
console.log("Server running at http://127.0.0.1");
