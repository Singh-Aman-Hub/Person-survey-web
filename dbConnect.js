const mongoose = require('mongoose');
const url='mongodb://127.0.0.1:27017/hotel';

mongoose.connect(url,{
    serverSelectionTimeoutMS: 2000 
});

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Mongo DB connected");
})

db.on('error',()=>{
    console.log("Error connection to mongoDB");
})

db.on('disconnected',()=>{
    console.log("Mongo DB server Disconnected");
})

module.exports=db;