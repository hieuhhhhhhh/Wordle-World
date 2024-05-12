import * as config from "./config.js";
import express from "express";
import cors from "cors";

// routes:
import validateSignUp from "backend/authentication/validateSignUp.js";
import fetchUsersInfo from "backend/user/fetchUsers.js";
import signUp from "backend/authentication/signUp.js";
import login from "backend/authentication/logIn.js";
import logout from "backend/authentication/logOut.js";
import startGame from "backend/game/start.js";
import resetTokenTO from "backend/token/resetTO.js";

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

app.post("/logOut", logout);

app.post("/startGame", startGame);

app.post("/userInteract", (req) => {
  const token = req.body;
  resetTokenTO(token);
});

// Start the server
app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
