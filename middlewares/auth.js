import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import ErrorHandler from "./error.js";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("Login First", 401));

  const decodedToken = jwt.verify(token, process.env.JWT_KEY);
  req.user = await User.findById(decodedToken._id);
  next();
};
