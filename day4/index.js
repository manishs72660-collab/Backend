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
app.get("/book",(req,res)=>{
    res.send(bookstore);
})

app.get("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = bookstore.find((info) => info.id == id);
    res.send(book);
});
app.post("/book", (req, res) => {
    const id = parseInt(req.body.id);

    const book = bookstore.find((info) => info.id === id);

    if (!book) {
        bookstore.push(req.body);
        res.send("data saved successfully");
    } else {
        res.send("data already exists");
    }
});

app.delete("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    let book=bookstore.filter((value)=>value.id!=id);
    bookstore=book;
    res.send("data delete sucessfully");
})


// // app.use("/",(req,res)=>{
// //     res.send({"name":"manish","age":18,"roll":123});
// // })


// app.get("/about",(req,res)=>{
//     res.send({"name":"manish","age":18,"roll":18,"class":"bca","semester":4});
// })


// app.post("/about", (req,res)=>{
//     res.send("Data Saved Successfully");
// })

app.listen(4000,()=>{
   console.log("i am linstening at 4000");
})



