const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
 
app.use(express.urlencoded());
var contactList = [
    {
        name:"Abhay Yadav",
        phone:"123456789"
    },
    {
        name: "Abhishek Yadav",
        phone:"9876543210"
    },
    {
        name:"Akshay Yadav",
        phone:"1020304050"
    }
];

app.get('/',function(req,res){
    // console.log(__dirname); to define the path location of file
 
    return res.render('home',{
        title:"Contact List",
        contact_list:contactList
    });

    // res.send('<h1>Cool, it is running! or is it?</h1>')
});

app.get('/practice',function(req,res){
    return res.render('practice',{title:"This is Practice Pages"});
})

app.post('/create-contact',function(req,res){
    // return res.redirect('/practice');
    contactList.push({
        name:req.body.name,
        phone:req.body.phone
    });
    return res.redirect('/');
})

app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        return;
    }
    console.log('Yup! My Express server running on port: ',port);
})