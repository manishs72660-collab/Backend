const express=require("express");

const app=express();

let bookstore = [
    { id: 1, book: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki" },
    { id: 2, book: "The Alchemist", author: "Paulo Coelho" },
    { id: 3, book: "Atomic Habits", author: "James Clear" },
    { id: 4, book: "Think and Grow Rich", author: "Napoleon Hill" },
    { id: 5, book: "The Power of Now", author: "Eckhart Tolle" },
    { id: 6, book: "Ikigai", author: "Héctor García & Francesc Miralles" },
    { id: 7, book: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey" },
    { id: 8, book: "Deep Work", author: "Cal Newport" },
    { id: 9, book: "Start with Why", author: "Simon Sinek" },
    { id: 10, book: "Zero to One", author: "Peter Thiel" }
];

app.use(express.json());

app.get("/book", (req, res) => {
    const { author, book } = req.query;
    let result = bookstore;

    if (author) {
        result = result.filter(item => item.author === author);
    }

    if (book) {
        result = result.filter(item => item.book === book);
    }

    res.send(result);
});

app.get("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const book=bookstore.find((info)=>info.id==id);
    res.send(book);
})


app.post("/book",(req,res)=>{
    const data=req.body;
    if(!data.id){
        res.send("id is missing");
    }else if(!(data.book || data.bookname)){
        res.send("book name is missing");
    }else if(!(data.author||data.name)){
        res.send("author name is missing")
    }else if(bookstore.some(obj => obj.id === data.id)){
         res.send("data is already present");
    }else{
        bookstore.push(data);
        res.send("data saved sucessfully");
    }
})

app.put("/book/:id",(req,res)=>{
    const id=req.body.id;
    const data=req.body;
    const book=bookstore.find((info)=>info.id==id);
    if(!data.id){
        res.send("id is missing");
    }else if(data.author&&data.book){
        book.author=data.author;
        book.book=data.book;
        res.send("author and book is updated");
    }else if(data.author||data.name){
        if(data.author){
            book.author=data.author;
            res.send("author name updated");
        }else{
            book.author=data.name;
            res.send()
        }
    }else if(data.book||data.bookname){
        if(data.book){
            book.book=data.book;
            res.send("book name updated");
        }else{
            book.book=data.bookname;
            res.send("bookname is updated");
        }
    }else{

    }
    // book.author=req.body.author;
    // res.send("data change sucessfully");
})

app.delete("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    if(bookstore.some(obj => obj.id === id)){
    const updatebookstore=bookstore.filter((info)=>info.id!=id)
    bookstore=updatebookstore;
    res.send("data delete sucessfully");
    }else{
        res.send("data is already delete");
    }
})

app.listen(4000,()=>{
   console.log("i am linstening at 4000");
})
