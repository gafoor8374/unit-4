const express = require('express');

// const mongoose = require('mongoose');

const connect = require('./configs/db');


const userController = require('./controllers/user.controller');
const branchController = require('./controllers/branch.controllers');
const masterController = require('./controllers/master.controllers');
const savingController = require('./controllers/saving.controllers');
const fixedController = require('./controllers/fixed.controllers'); 

const app = express();
app.use(express.json());

app.use("users",userController)
app.use("branch",branchController)
app.use("master",masterController)
app.use("saving",savingController)
app.use("fixed",fixedController)


app.listen(5000,async()=>{
    // try{
    //     await connect();

    // }
    // catch(err){
    //     console.log(err)
    // }
    await connect();
    console.log("listening is port 5000")
    
})