const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title:'Tom and Jerry',
            author:'joseph barbara',
            genre:'cartoon',
            img:"tom.jpg",
        },
        {
            title:'Harry Potter',
            author:'J.K Rowling',
            genre:'Fantasy',
            img:"harry.jpg",
        },
        {
            title:'pathummayude aadu',
            author:'Basheer',
            genre:'Drama',
            img:"basheer.jpg",
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            title:'Library',
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            title:'Library',
            book: books[id]
    
        });
    });

    return booksRouter;
}


module.exports=router;