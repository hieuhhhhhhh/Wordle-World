import * as DBroutines from "backend/DBroutines"; // Assuming DBroutines is a module providing database functionalities

const validateSignUp = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // validate 1: check body
  if (!username || !password) {
    return res.status(400).send("username + password are required");
  }

  // validate 2: check username duplicate:
  const db = await DBroutines.getDB();
  const result = await DBroutines.getDocs(db, "users", {}, {});
  const usernames = result.map((item) => item.username);

  if (usernames.includes(username)) {
    return res.status(400).send("Username already exists");
  }

  // Add more validation logic as needed
  next(); // Call the next middleware function
};

export default validateSignUp;
