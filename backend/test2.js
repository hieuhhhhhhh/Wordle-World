import { MongoClient } from "mongodb";
import * as DBroutines from "backend/DBroutines";
import * as cfg from "./config.js";

async function fetchData() {
  try {
    const db = await DBroutines.getDB();
    const result = await DBroutines.getDocs(db, "users");
    console.log(result);
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

fetchData();
