import * as DBroutines from "backend/DBroutines";
import * as config from "backend/config";

const resetTokenTimeout = async (token) => {
  try {
    // 1: setup data
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + config.tokenTimeout);

    // 2: update token
    token.expiry = expiry;

    // 3: update in DB
    const db = await DBroutines.getDB();
    DBroutines.updateDoc(db, "tokens", { _id: token._id }, { expiry: expiry });

    // 4: start timeout
    startTimeout(token, config.tokenTimeout * 60 * 1000);
  } catch (error) {
    console.error("Error handle token:", error);
  }
};

const startTimeout = (token, delay) => {
  setTimeout(async () => {
    try {
      // 1: connect db
      const db = await DBroutines.getDB();

      // 2: get token from database
      const tokenInDB = await DBroutines.getDoc(db, "tokens", {
        _id: token._id,
      });

      // 3: if token not found or time not match, return
      if (!tokenInDB || tokenInDB.expiry.getTime() !== token.expiry.getTime()) {
        return;
      }

      // 4: if matches, remove token in DB
      await DBroutines.removeDoc(db, "tokens", { _id: token._id });
      console.log(`session timeout, user: ${tokenInDB.username}`);
    } catch (error) {
      console.error("Error handle token:", error);
    }
  }, delay);
};

export default resetTokenTimeout;
