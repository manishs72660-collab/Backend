const mongoose = require('mongoose');
const { Schema } = mongoose;

const Userschema=new Schema({
    id:Number,
    name:String,
    age:Number,
    city:String,
    addhar:Number,
    gender:String
})

const User=mongoose.model("user",Userschema);

module.exports=User;