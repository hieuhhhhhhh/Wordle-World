import { MongoClient } from "mongodb";
import * as DBroutines from "backend/DBroutines";

import * as cfg from "./config.js";

async function fetchData() {
  try {
    const db = await DBroutines.getDB();

    const collection = db.collection("users");

    // Fetch data asynchronously
    const result = await collection.find({}).toArray();

    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
