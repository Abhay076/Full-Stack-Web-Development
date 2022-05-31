var http = require('http');

const port=8000;
 const fs=require('fs');
function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});

    let FilePath;

    switch(req.url){
        case "/":
            FilePath = './index.html'
            break;
        case '/profile':
            FilePath = './profile.html'
            break;
        default :
            FilePath = './404.html'
    }
    fs.readFile(FilePath,function(err,data){
        if(err){
            console.log('Error',err);
           return res.end('<h1>Error</h1');
        }
       return res.end(data);
    })





    //  fs.readFile('./index.html',function(err,data){
    //      if(err){
    //          console.log('Error',err);
    //         return res.end('<h1>error</h1>');
    //      }
    //      return res.end(data);
    //  })

    // res.end('<h1>Hello World!</h1>');

}

const server=http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server run Up port on:",port);
});
