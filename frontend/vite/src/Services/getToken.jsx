const getToken = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    throw new Error("no token found");
  }

  return token;
};

export default getToken;
