const express = require('express');

const app = express();
// app.use(allBooks);
// app.use(libraries);
// app.use(authors)

app.use(logger)

app.get('/books',logger, (req, res) => {
    res.send({route: '/books'})
})

app.get('/libraries',logger,checkPermission("librarian"),(req, res) => {
 res.send({route: '/libraries',permission:true})
})

app.get("/authors",logger,checkPermission("author"),(req, res) =>{
   res.send({route: '/authors', permission:true})
})

function checkPermission (role) {
    return function logger(req, res,next) {
        if(role==="librarian"){
            return next();
        }
        else if(role==="author"){
           return next();
        }
        return res.send('not allow')
    }
}

// function allBooks(req,res,next) {
//     console.log('All books');
//     next();
// }
// function authors(req,res,next){
//     console.log("authors",authors);
//     next();
// }

// function libraries(res,req,next){
//     console.log('Libraries',libraries);
//     next();
// }

function logger(req,res,next){
    if(res.path==="/books"){
        req.role="book"
    }
    else if(res.path==="/libraries"){
        req.role="librarian"
    }else{
        req.role="author"
    }
    console.log("called");
    next();
}

app.listen(5052,()=>{
    console.log("listening on port 5000")
})