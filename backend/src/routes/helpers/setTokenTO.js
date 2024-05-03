import * as DBroutines from "backend/DBroutines";
import * as config from "backend/config";

const setTokenTimeout = async (token) => {
  try {
    // 1: connect db
    const db = await DBroutines.getDB();

    // 2: compare data from database (2 expiry times should match)
    const tokenInDB = await DBroutines.getDoc(db, "tokens", { _id: token._id });

    // 3: if not match, return
    if (tokenInDB.expiry !== token.expiry) {
      return;
    }

    // 4: if matches, remove token after expiry time
    setTimeout(async () => {
      await DBroutines.removeDoc(db, "tokens", { _id: token._id });
      console.log(`session timeout, user: ${token.username}`);
    }, config.tokenTimeout * 60 * 1000);
  } catch (error) {
    console.error("Error login:", error);
  }
};

export default setTokenTimeout;
