import * as DBroutines from "backend/DBroutines";
import compareWords from "../word/compareWords";

const playGame = async (req, res) => {
  try {
    // 1: set up:
    const tokenID = req.body.tokenID;
    const guess = req.body.guess;
    const result = {};

    // 2: get gameInfo from db

    // 2: validate word:

    // 3: compare word:

    // 3: generate final result.

    // 4: update game doc in db:

    // 4: return result:
    res.send(result);
  } catch (error) {
    console.error("Error playing game:", error);
    res.status(500).send("Error playing game.");
  }
};

export default playGame;
