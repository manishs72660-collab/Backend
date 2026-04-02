const express=require("express");
const main=require("./database");
const User=require("./Models/user");
const app=express();

app.use(express.json());

app.get("/info",async(req,res)=>{
    const ans=await User.find({});
    res.send(ans);
})

app.get("/info/:id",async (req,res)=>{
  try{
    const data = await User.find();
    //console.log(adventures);
    const index = parseInt(req.params.id);
    // const ans=await User.findOne({ "id":id }).exec();;
    const id=data[index];
    const ans=await User.findById(id).exec();
    res.send(ans);
   }catch(err){
      res.send(err.message);
   }
})

app.post("/info", async (req, res) => {
  try {
    // console.log(req.body);
    await User.create(req.body);
    res.send("data added successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});
app.put("/info/:id", async (req, res) => {
  try {
    const getdata = req.body;
    const id = parseInt(req.params.id);
    const users = await User.find();
    const doc = await User.findById(users[id]);
    if (!doc) {
      return res.status(404).json({ message: "User not found" });
    }
    if (getdata.name) doc.name = getdata.name;
    if (getdata.age) doc.age = getdata.age;
    if (getdata.city) doc.city = getdata.city;
    if (getdata.gender) doc.gender = getdata.gender;

    await doc.save();

    res.status(200).json({
      message: "User updated successfully",
      data: doc
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/info/:id", async (req, res) => {
  try {
    const index = parseInt(req.params.id);
    const data = await User.find();
    const id = data[index];
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      message: "User deleted successfully",
      data: deletedUser
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>{
        console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));