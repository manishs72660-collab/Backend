require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const express = require('express')
const main=require("./database");
const User=require("./Models/user");
const bcrypt=require("bcrypt");
const app = express()
app.use(express.json());


app.get('/info', async(req, res) => {
  try{
    const ans=await User.find({});
    res.send(ans);
  }catch(err){
    res.send("Error "+err.message);
  }
})

app.post('/register',async(req,res)=>{
    try{
        const mandatoryField = ["firstname","emailid","age"];
        
        const IsAllowed = mandatoryField.every((k)=> Object.keys(req.body).includes(k));

        if(!IsAllowed)
            throw new Error("Fields Missing");
        req.body.password=await bcrypt.hash(req.body.password,10);
        await User.create(req.body);
        res.send("register sucessfully");
    }catch(err){
        res.send("Error "+err.message);
    }
})

app.put('/update',async(req,res)=>{
    try{
    const {_id, ...update} = req.body;
    await User.findByIdAndUpdate(_id, update,{"runValidators":true});
    res.send("updated sucessfully");
    }catch(err){
        res.send("Error"+err.message);
    }
})

main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>{
        console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));