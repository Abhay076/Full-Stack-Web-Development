const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const Contact = require('./models/contact');
const app = express();

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
 
app.use(express.urlencoded());
app.use(express.static('assets'));
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
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts');
            return;
        }
        return res.render('home',{
            title:"Contact List",
            contact_list:contacts
        });
    });
    // return res.render('home',{
    //     title:"Contact List",
    //     contact_list:contactList
    // });

    // res.send('<h1>Cool, it is running! or is it?</h1>')
});

app.get('/practice',function(req,res){
    return res.render('practice',{title:"This is Practice Pages"});
})

app.get('/delete-contact', function(req,res){
    //  console.log(req.query);
     let phone=req.query.phone;
     let contactIndex = contactList.findIndex(contact => contact
        .phone == phone);
    if(contactIndex!=-1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');
})
app.post('/create-contact',function(req,res){
    // return res.redirect('/practice');
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // });
    // contactList.push(req.body);
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err){
            console.log('error in creating a Contact!');
            return;
        }
        console.log('**********',newContact);
        return res.redirect('back');
    });
    // return res.redirect('/');
});

app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        return;
    }
    console.log('Yup! My Express server running on port: ',port);
})