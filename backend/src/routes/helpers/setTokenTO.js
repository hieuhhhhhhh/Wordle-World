import * as DBroutines from "backend/DBroutines";
import * as config from "backend/config";

const setTokenTimeout = async (token) => {
  const db = await DBroutines.getDB();
  try {
    setTimeout(async () => {
      await DBroutines.removeDoc(db, "tokens", { _id: token._id });
      console.log(`session timeout, user: ${token.username}`);
    }, config.tokenTimeout * 60 * 1000);
  } catch (error) {
    console.error("Error login:", error);
  }
};

export default setTokenTimeout;
