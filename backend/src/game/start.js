import * as DBroutines from "backend/DBroutines";
import generateWord from "backend/word/generateWord.js";
import getUserName from "backend/token/getUserName.js";
import * as config from "backend/config";

const startGame = async (req, res) => {
  try {
    // 1: set up data
    const token = req.body;

    // 2: create new game doc:
    const game = {
      tokenID: token._id,
      username: getUserName(token),
      expiry: null,
      answer: generateWord(),
      remainedGuesses: config.maxGuesses,
    };

    const result = await DBroutines.addDoc(db, "games", game);
    result.gameTime = config.gameTime;

    // 3: return result:
    res.send(result);
  } catch (error) {
    console.error("Error starting game:", error);
    res.status(500).send("Error starting game.");
  }
};

export default startGame;
