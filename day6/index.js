const express=require("express");

const app=express();
app.use("/",(req,res)=>{
    res.send("server is live");
})

app.listen(3000,()=>{
    console.log("i am listining at 3000 port");
})