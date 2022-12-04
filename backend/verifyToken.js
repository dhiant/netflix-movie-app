const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.token;

  // if there is a token
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.PASSWORD_KEY, (err, user) => {
      // if token has been changed or expired
      if (err) res.status(401).json("Token is not valid.");
      req.user = user;
      next();
    });
  }
  // if there is no token
  else {
    res.status(401).json("Sorry!! You are not authenticated.");
  }
}

module.exports = verifyToken;
