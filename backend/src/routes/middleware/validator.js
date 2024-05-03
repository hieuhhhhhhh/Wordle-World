const validateSignUp = (req, res, next) => {
  const userData = req.body;
  // Example validation - check if required fields are present
  if (!userData.username) {
    return res.status(400).send("username + password are required");
  }
  // Add more validation logic as needed
  next(); // Call the next middleware function
};

export default validateSignUp;
