import * as config from "./config.js";
import express from "express";
import cors from "cors";

// routes:
import validateSignUp from "backend/routes/middleware/validator.js";
import fetchUsersInfo from "backend/routes/fetchUsers.js";
import signUp from "backend/authentication/signUp.js";
import login from "backend/authentication/logIn.js";
import startGame from "backend/game/startGame.js";

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

app.post("/startGame", startGame);

// Start the server
app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
