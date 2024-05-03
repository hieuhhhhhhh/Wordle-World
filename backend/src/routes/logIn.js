import * as DBroutines from "backend/DBroutines";
import hashString from "./helpers/hash.js";

const logIn = async (req, res) => {
  try {
    // 1: set up data
    const username = req.body.username;
    const password = req.body.password;

    // 2: validate request:
    if (!username || !password) {
      return res.status(400).send("username + password are required");
    }

    // 3: compare hashed password with database:
    const hashed = hashString(password);
    const db = await DBroutines.getDB();
    const result = await DBroutines.getDoc(db, "authentication", {
      username: username,
    });

    // 4: return result
    if (hashed === result.password) {
      // 4.1: generate and return a token:
      const token = { username: username };
      const tokenRes = await DBroutines.addDoc(db, "tokens", token);

      res.send({ token: tokenRes.insertedId });
    } else {
      res.status(401).send("Wrong Password.");
    }
  } catch (error) {
    console.error("Error login:", error);
    res.status(500).send("Error login.");
  }
};

export default logIn;