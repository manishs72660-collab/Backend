require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://manishsingh:<password>6@codingadda.bzyu9qj.mongodb.net/?appName=codingadda';
const client = new MongoClient(url);

// Database Name
const dbName = 'mydtabase';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...
//   const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
//   console.log('Inserted documents =>', insertResult);


//   const findResult = await collection.find({}).toArray();
// const findResult = await collection.findOne();
// console.log('Found document =>', findResult);

// const result = await collection.findOneAndDelete({ name: "sushil"});
// console.log("Deleted document:", result);


// const result = await collection.findOneAndReplace(
//   { a: 1 },       
//   { name: "sushil", age: 20,class:"bca"}  
// );
// console.log(result);


// const result = await collection.findOneAndUpdate(
//   { name: "manish" },
//   { $rename: { name: "fullName" } },
//   { returnDocument: "after" }
// );

// console.log(result.value);

// const indexes = await collection.indexInformation();
// console.log(indexes);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());