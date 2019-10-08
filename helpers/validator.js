const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {

  const token = req.body.token || req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
     if (req.user.role==="admin"){
       req.user.isAdmin=true;
    }
    else {req.user.isAdmin=false;} 
    next();
  } catch (exception) {
    res.status(400).send("Invalid token.");
  }
};