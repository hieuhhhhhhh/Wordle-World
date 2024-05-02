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

const addOneDoc = (db, coll, doc) => db.collection(coll).insertOne(doc);

const count = (db, coll) => db.collection(coll).countDocuments();

const getManyDocs = (db, coll, criteria, projection) =>
  db.collection(coll).find(criteria).project(projection).toArray();

const getOneDoc = (db, coll, criteria) => db.collection(coll).findOne(criteria);

export { getDB, addOneDoc, getOneDoc, getManyDocs, count };
