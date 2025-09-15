require("dotenv").config();
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const whiteLists = ["/", "/auth/register", "/auth/login"];

  if (whiteLists.find((item) => "/v1/api" + item === req.originalUrl)) {
    next();
  } else {
    if (req?.headers?.authorization?.split(" ")?.[1]) {
      const token = req.headers.authorization.split(" ")[1];

      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        next();
      } catch (error) {
        return res.status(401).json({
          message: "token has expired.",
        });
      }
    } else {
      return res.status(401).json({
        message:
          "You have not passed an access token in the header or the token has expired.",
      });
    }
  }
};

export default authMiddleware;
