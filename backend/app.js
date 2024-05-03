import * as config from "./config.js";
import express from "express";

// route handlers:

import validateSignUp from "backend/routes/middleware/validator.js";
import fetchUserInfos from "backend/routes/fetchUsers.js";
import signUp from "backend/routes/signUp.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/users", fetchUserInfos);

app.post("/signUp", validateSignUp, signUp);

// Start the server
app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
