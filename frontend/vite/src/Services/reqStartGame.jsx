const requestStartGame = async (token) => {
  const response = await fetch("http://localhost:5000/startGame", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      _id: token._id,
    }),
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
};

export default requestStartGame;
