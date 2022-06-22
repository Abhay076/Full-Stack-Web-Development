//require the library
const mongoose = require('mongoose');
//connect to the database
mongoose.connect('mongodb://localhost/contacts_list_db');
// Acquire the connection (to check if it successful)
const db = mongoose.connection;
//error
db.on('error',console.error.bind(console,'error connecting to db'));
//Up and Running then print message
db.once('open',function(){
         console.log('Successfully connected to db');
});