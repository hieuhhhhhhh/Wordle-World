import * as DBroutines from "backend/DBroutines";
import * as config from "backend/config";
import hashString from "./helpers/hash.js";

const signUp = async (req, res) => {
  try {
    const db = await DBroutines.getDB();
    let userInfo = {};
    let authen = {}; // authen = authentication

    // 1: init username:
    userInfo.username = req.body.username;
    authen.username = req.body.username;

    // 2: init original score:
    userInfo.score = config.originalScore;

    // 3: hash user's password.
    const hashedValue = hashString(req.body.password);
    authen.password = hashedValue;

    // 4: add to database.
    const usersRes = await DBroutines.addDoc(db, "users", userInfo);

    const authenRes = await DBroutines.addDoc(db, "authentication", authen);

    res.send({ usersRes, authenRes }); // Sending an object containing both results.
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
};

export default signUp;
