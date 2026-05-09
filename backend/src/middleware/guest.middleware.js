import jwt from "jsonwebtoken";
import User from "../models/User.js";

const guestRoute = async (req, res, next) => {
  try {
    let token;

    // get token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // no token, then continue on
    if (!token) {
      return next();
    }

    // verify token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);


    // user already logged in
    if (user) {
      return res.status(400).json({
        success: false,
        message: "You are already logged in",
      });
    }

    next();
  } catch (error) {
    next();
  }
};

export default guestRoute;