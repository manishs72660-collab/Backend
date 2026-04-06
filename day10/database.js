require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const mongoose = require('mongoose');
async function main() {
   
await mongoose.connect('mongodb+srv://manishsingh:<password>@codingadda.bzyu9qj.mongodb.net/Bookstore');


}


module.exports = main;