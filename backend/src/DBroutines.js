import { MongoClient } from "mongodb";
import * as cfg from "../config.js";

let db; // db = database

const getDB = async () => {
  if (db) {
    console.log("using established connection");
    return db;
  }
  try {
    const client = new MongoClient(cfg.atlasURL);
    const connection = await client.connect();
    db = connection.db(cfg.DBname);
  } catch (err) {
    console.log(err);
  }
  return db;
};

export { getDB };
