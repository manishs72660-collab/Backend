const express=require("express");

const app=express();

// app.use("/",(req,res)=>{
//     res.send({"name":"manish","age":18,"roll":123});
// })

app.use("/contact",(req,res)=>{
    res.send("i am contact page");
})
app.use("/about",(req,res)=>{
    res.send("i am about page");
})
app.use("/detail",(req,res)=>{
    res.send("i am detail page");
})

app.use("/",(req,res)=>{
    res.send("i am home page")
})


app.listen(4000,()=>{
   console.log("i am linstening at 4000");
})

