import { MongoClient } from "mongodb";
import * as cfg from "backend/config";

let db; // db = database

const getDB = async () => {
  if (db) {
    console.log("using established connection");

    return db;
  }
  const client = new MongoClient(cfg.atlasURL);
  const connection = await client.connect();
  console.log("establishing new connection to Atlas");

  db = connection.db(cfg.DBname);
  return db;
};

const addDoc = (db, coll, doc) => db.collection(coll).insertOne(doc);

const count = (db, coll) => db.collection(coll).countDocuments();

const getDocs = (db, coll, criteria, projection) =>
  db.collection(coll).find(criteria).project(projection).toArray();

const getDoc = (db, coll, criteria) => db.collection(coll).findOne(criteria);

const updateDoc = (db, coll, criteria, projection) =>
  db
    .collection(coll)
    .findOneAndUpdate(criteria, { $set: projection }, { rawResult: true });

export { getDB, addDoc, getDoc, getDocs, count, updateDoc };