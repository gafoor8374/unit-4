
const express = require("express");
const app = express();

app.get("/home", function(req, res){
    res.send("hello this gafoor");
});

app.listen(6007, ()=> {
    console.log("Welcome to the  masai school")
});