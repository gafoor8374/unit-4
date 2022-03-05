const books = require("express");
const app = books();

app.get("/books", function(req, res){
    res.send({
        "b1":"man's search for meaning", 
        "b2": "theory of everything",
        "b3": "The shining by stephen king ",
        "b4": "something i never told you"
    });

})
    app.listen(6001, ()=> {
        console.log("this is four books")
    });