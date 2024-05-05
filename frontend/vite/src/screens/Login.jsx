import React from "react";

// services:
import requestLogIn from "@services/requestLogIn.jsx";
import getToken from "@services/getToken.jsx";

function LogIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    const token = await requestLogIn(username, password);
    // Convert the object to a JSON string

    // Store Token to Local storage
    localStorage.setItem("token", JSON.stringify(token));

    console.log(getToken()); // This will log 'value'
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LogIn;
