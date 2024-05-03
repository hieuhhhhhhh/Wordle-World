import * as DBroutines from "backend/DBroutines";
import * as config from "backend/config";

const setTokenTimeout = async (token) => {
  setTimeout(async () => {
    try {
      // 1: connect db
      const db = await DBroutines.getDB();

      // 2: get token data from database
      const tokenInDB = await DBroutines.getDoc(db, "tokens", {
        _id: token._id,
      });

      // 3: if the time not match, return
      if (tokenInDB.expiry.getTime() !== token.expiry.getTime()) {
        return;
      }

      // 4: if matches, remove token
      await DBroutines.removeDoc(db, "tokens", { _id: token._id });
      console.log(`session timeout, user: ${token.username}`);
    } catch (error) {
      console.error("Error handle token:", error);
    }
  }, config.tokenTimeout * 60 * 1000);
};

export default setTokenTimeout;
