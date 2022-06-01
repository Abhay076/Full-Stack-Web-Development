const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));



app.get('/',function(req,res){
    // console.log(__dirname); to define the path location of file
 
    return res.render('home');

    // res.send('<h1>Cool, it is running! or is it?</h1>')
})


app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        return;
    }
    console.log('Yup! My Express server running on port: ',port);
})