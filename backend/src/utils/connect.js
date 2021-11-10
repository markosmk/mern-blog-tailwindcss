import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config();

// Conection URL
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database name
const defaultDbName = 'simple-blog';

// to handle collections
export let db;

// to connect mongodb
export const connect = async (dbName = defaultDbName) => {
  const con = await client.connect();
  db = con.db(dbName);
  return client;
};
