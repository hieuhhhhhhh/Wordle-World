import * as DBroutines from "backend/DBroutines";
import * as config from "backend/config";
import hashString from "./helpers/hash.js";

const signUp = async (req, res) => {
  try {
    const db = await DBroutines.getDB();

    // 1: init users doc:
    let userInfo = {};
    userInfo.username = req.body.username;
    userInfo.name = req.body.username;
    userInfo.score = config.originalScore;

    // 2: init authentication doc:
    let authen = {}; // authen = authentication
    authen.username = req.body.username;
    authen.password = hashString(req.body.password);

    // 3: send to database.
    const usersRes = await DBroutines.addDoc(db, "users", userInfo);

    const authenRes = await DBroutines.addDoc(db, "authentication", authen);

    res.send({ usersRes, authenRes }); // Sending an object containing both results.
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
};

export default signUp;
