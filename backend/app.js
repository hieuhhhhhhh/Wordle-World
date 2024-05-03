import * as config from "./config.js";
import express from "express";
import * as DBroutines from "backend/DBroutines";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/users", async (_req, res) => {
  try {
    const db = await DBroutines.getDB();
    const result = await DBroutines.getDocs(db, "users", {}, {});
    res.send(result);
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).send("Error fetching documents");
  }
});

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
