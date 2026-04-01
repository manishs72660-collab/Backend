require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const mongoose = require('mongoose');
async function main() {
   
await mongoose.connect('mongodb+srv://manishsingh:8294068776@codingadda.bzyu9qj.mongodb.net/Bookstore');


}


module.exports = main;