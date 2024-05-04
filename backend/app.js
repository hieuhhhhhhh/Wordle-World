import * as config from "./config.js";
import express from "express";
import cors from "cors";

// routes:
import validateSignUp from "backend/routes/middleware/validator.js";
import fetchUsersInfo from "backend/routes/fetchUsers.js";
import signUp from "backend/routes/signUp.js";
import login from "backend/routes/logIn.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/users", fetchUsersInfo);

app.post("/signUp", validateSignUp, signUp);

app.post("/logIn", login);

// Start the server
app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
