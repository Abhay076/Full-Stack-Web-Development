var http = require('http');

const port=8000;

const server=http.createServer();

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server run Up port on:",port);
});
