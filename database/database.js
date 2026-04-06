const mongoose=require("mongoose");

async function main() {
  await mongoose.connect('mongodb+srv://manishsingh:<password>@codingadda.bzyu9qj.mongodb.net/Instagram');

}

module.exports=main;