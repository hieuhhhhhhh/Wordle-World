const requestLogIn = async (username, password) => {
  const response = await fetch("http://localhost:5000/logIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  console.log(response);
  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
};

export default requestLogIn;
