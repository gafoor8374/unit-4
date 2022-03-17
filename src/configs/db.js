const mongoose = require('mongoose');

module.exports = ()=>{
    // return mongoose.connect("mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web15-atlas?retryWrites=true&w=majority")
    return mongoose.connect("mongodb+srv://gafoor:gafoor8374@cluster0.v8wsr.mongodb.net/assignment?retryWrites=true&w=majority",
    // {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: true,
    //   } 
    )
    
};