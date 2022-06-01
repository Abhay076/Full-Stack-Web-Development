const express = require('express');

const port = 8000;

const app = express();





app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        return;
    }
    console.log('Yup! My Express server running on port: ',port);
})