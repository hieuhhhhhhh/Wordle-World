const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

export default getToken;
