import * as DBroutines from "backend/DBroutines";

const fetchUserInfos = async (_req, res) => {
  try {
    const db = await DBroutines.getDB();
    const result = await DBroutines.getDocs(db, "users", {}, {});
    res.send(result);
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).send("Error fetching documents");
  }
};

export default fetchUserInfos;
