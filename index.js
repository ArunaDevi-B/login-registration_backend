const express = require('express');
const db = require('./Config/db-config');
const Route = require('./Route/Routes');
const { MongoClient } = require('mongodb');
var cors = require('cors')

// import { MongoClient } from 'mongodb';

require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());

db.connectDB();

app.use(Route);

const PORT = process.env.PORT || 9000;
const MONGO_URL=process.env.MONGO_URL;


// async function createConnection(){
//     try{
//       const client = new MongoClient(MONGO_URL);
//     await client.connect();
//     console.log("Connected Mongo");
//     return client;
//     }catch(error){console.log("error.......  ",error)}
    
//   }
// const client = await createConnection()

app.listen(PORT, ()=> {
    console.log(`Listening on port: ${9000}`)
});

