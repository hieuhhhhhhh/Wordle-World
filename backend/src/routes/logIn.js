import * as DBroutines from "backend/DBroutines";
import hashString from "./helpers/hash.js";
import resetTokenTO from "./helpers/resetTokenTO.js";

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
    // 4.1: user not found OR wrong password
    if (!result || hashed !== result.password) {
      res.status(401).send("Invalid Username or Password.");
      return;
    }

    // 4.2: succesful login. return token
    const tokenInfo = { username: username, expiry: null };
    const result2 = await DBroutines.addDoc(db, "tokens", tokenInfo);

    const token = { _id: result2.insertedId };
    res.send(token);

    // 4.2.1: start token timeout.
    resetTokenTO(token);
  } catch (error) {
    console.error("Error login:", error);
    res.status(500).send("Error login.");
  }
};

export default logIn;
