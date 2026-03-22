const express=require("express");
const {Auth}=require("./middleware/auth");
const app=express();

const foodmenu = [
    { id: 1, name: "Chicken Curry", category: "non-veg", price: 200 },
    { id: 2, name: "Mutton Biryani", category: "non-veg", price: 280 },
    { id: 3, name: "Fish Fry", category: "non-veg", price: 220 },
    { id: 4, name: "Paneer Butter Masala", category: "veg", price: 180 },
    { id: 5, name: "Veg Biryani", category: "veg", price: 150 },
    { id: 6, name: "Dal Tadka", category: "veg", price: 120 },
    { id: 7, name: "Aloo Gobi", category: "veg", price: 130 },
    { id: 8, name: "Egg Curry", category: "non-veg", price: 140 },
    { id: 9, name: "Chicken Roll", category: "non-veg", price: 100 },
    { id: 10, name: "Veg Sandwich", category: "veg", price: 80 }
];
const cardmenu=[];

app.use(express.json());
//app.use("/admin",Auth);
// app.use("/admin",(req,res,next)=>{
//     const token = "ABCDEF"
//     const Access = token === "ABCDEF" ?1:0;
//     if(!Access){
//         res.send("does not permit");
//     }
//     next();

// })
app.get("/food",(req,res)=>{
  res.send(foodmenu);
})

app.get("/food/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const book=foodmenu.find((info)=>info.id==id);
    if(book){
        res.send(book);
    }else{
       res.send("not present in list");
    }
})

app.post("/admin",Auth,(req,res)=>{
    // const token = "ABCDEF"
    // const Access = token === "ABCDEF" ?1:0;
    // if(Access){
        foodmenu.push(req.body);
        res.send("food is added");
    // }else{
    //     res.status(403).send("not permit");
    // }
})

app.patch("/admin",Auth,(req,res)=>{
    // const token = "ABCDEF"
    // const Access = token === "ABCDEF" ?1:0;

    // if(Access){
        const id=req.body.id;
        const item=foodmenu.find(info=>info.id==id);
        if(req.body.name){
            item.name=req.body.name;
        }
        if(req.body.category){
            item.category=req.body.category;
        }
        if(req.body.price){
            item.price=req.body.price;
        }
        res.send("item updated sucessfully");
    // }else{
    //     res.status(403).send("not permit");
    // }    
})

app.delete("/admin/:id",Auth,(req,res)=>{
    // const token = "ABCDEF"
    // const Access = token === "ABCDEF" ?1:0;
    // if(Access){
       const id=parseInt(req.params.id);
       const index = foodmenu.findIndex(item => item.id ===id);

        if(index===-1){
           res.send("Item Doesn't Exist");
        }
        else{
            foodmenu.splice(index,1);
            res.send("Succesfully Deleted");
        }

    // }else{
    //     res.status(403).send("not permit");
    // }
})


app.get("/card",(req,res)=>{
   res.send(cardmenu);
})

app.post("/card/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const item=foodmenu.find(info=>info.id==id);
    cardmenu.push(item);
    res.send("item add in card");
})

app.delete("/card/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index = cardmenu.findIndex(item => item.id ===id);
    if(index===-1){
        res.send("Item Doesn't Exist");
    }
    else{
        cardmenu.splice(index,1);
        res.send("Succesfully Deleted");
    }
})
app.listen(3000,()=>{
    console.log("i am listinning at 3000 port");
})