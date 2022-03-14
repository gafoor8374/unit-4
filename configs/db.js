const mongoose = require('mongoose');


const connect = ()=>{
    return mongoose.connect("mongodb+srv://gafoor:gafoor8374@cluster0.v8wsr.mongodb.net/?retryWrites=true&w=majority")
};

module.exports = connect;