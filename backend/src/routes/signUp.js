import * as DBroutines from "backend/DBroutines";

const signUp = async (req, res) => {
  try {
    const db = await DBroutines.getDB();

    const userData = req.body;
    const result = await DBroutines.addDoc(db, "users", userData);
    res.send(result);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
};

export default signUp;
