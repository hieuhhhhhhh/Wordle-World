import * as DBroutines from "backend/DBroutines";

const logOut = async (req, res) => {
  try {
    // 1: set up data
    const token = req.body;

    // 2: remove token:
    const result = DBroutines.removeDoc(db, "tokens", { _id: token._id });
    res.send(result);
  } catch (error) {
    console.error("Error log out:", error);
    res.status(500).send("Error log out.");
  }
};

export default logOut;
