require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// const url = 'mongodb+srv://manishsingh:<password>@codingadda.bzyu9qj.mongodb.net/';
const url="mongodb+srv://manishsingh:<password>@codingadda.bzyu9qj.mongodb.net/?appName=codingadda";
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

const insertResult = await collection.insertMany([
      { a: 1 },
      { a: 2 },
      { a: 3 }
    ]);

console.log('Inserted documents =>', insertResult);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());