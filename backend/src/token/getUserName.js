import * as DBroutines from "backend/DBroutines";

const getInfo = async (token) => {
  try {
    // 1: set up data
    const db = await DBroutines.getDB();

    // 2: validate request:
    if (!token) {
      return res.status(400).send("token is missing");
    }

    // 3: retrieve username from DB:
    const tokenInfo = await DBroutines.getDocByID(db, "tokens", token._id);

    return tokenInfo.username;
  } catch (error) {
    console.error("Error handle token:", error);
    return null;
  }
};

export default getInfo;
