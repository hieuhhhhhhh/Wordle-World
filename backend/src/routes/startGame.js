import * as DBroutines from "backend/DBroutines";
import hashString from "./helpers/hash.js";
import resetTokenTO from "./helpers/resetTokenTO.js";

const startGame = async (req, res) => {
  try {
    // 1: set up data
    const token = req.body;
    const db = await DBroutines.getDB();

    // test:
    console.log(token._id);
    // 2: validate request:
    if (!token) {
      return res.status(400).send("token is missing");
    }

    // 3: retrieve username from DB:
    const tokenInfo = await DBroutines.getDocByID(db, "tokens", token._id);

    // 4: add a game doc:
    if (!tokenInfo) {
      return res.status(401).send("sesstion timeout");
    }

    const game = {
      tokenID: token._id,
      username: tokenInfo.username,
      expiry: null,
      answer: null,
    };

    const result = await DBroutines.addDoc(db, "games", game);

    // 5: return result:
    res.send(result);
  } catch (error) {
    console.error("Error starting game:", error);
    res.status(500).send("Error starting game.");
  }
};

export default startGame;
