import * as DBroutines from "backend/DBroutines";
import generateWord from "backend/generateWord";
import getUserName from "backend/token/getUserName.js";
import resetTokenTO from "backend/token/resetTO.js";

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
    };

    const result = await DBroutines.addDoc(db, "games", game);

    // 3: return result:
    res.send(result);

    // 4: reset token time out:
    resetTokenTO(token);
  } catch (error) {
    console.error("Error starting game:", error);
    res.status(500).send("Error starting game.");
  }
};

export default startGame;
