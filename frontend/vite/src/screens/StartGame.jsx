import requestStartGame from "@services/reqStartGame.jsx";
import getToken from "@services/getToken.jsx";

const gamePage = () => {
  const handleStartGame = async () => {
    const token = getToken();

    // console.log(token);
    const result = await requestStartGame(token);

    console.log(result);
  };
  return (
    <div>
      <button onClick={handleStartGame}>StartGame</button>
    </div>
  );
};

export default gamePage;
