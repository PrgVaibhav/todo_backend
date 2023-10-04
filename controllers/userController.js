import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import { addCookie } from "../utils/commonFunctions.js";
import ErrorHandler from "../middlewares/error.js";

// * For logging in user

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const ifUserExists = await User.findOne({ email }).select("+password");

    if (!ifUserExists)
      return next(new ErrorHandler("User doesn't exists", 401));

    const isMatched = await bcrypt.compare(password, ifUserExists.password);

    if (!isMatched)
      return next(new ErrorHandler("Invalid Email or Password", 401));

    addCookie(res, ifUserExists, 201, `Welcome back ${ifUserExists.username}`);
  } catch (error) {
    next(error);
  }
};

// * For registering user

export const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists)
      return next(new ErrorHandler("User Already Exists", 401));

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    addCookie(res, user, 201, "Registered Successfully");
  } catch (error) {
    next(error);
  }
};

// * For logging out user
export const userLogOut = (req, res) => {
  res.status(200).clearCookie("token").json({
    success: true,
    message: "Log Out Successfully",
  });
};

export const aboutUser = (req, res) => {
  res.status(201).json({
    success: true,
    message: "User Founded",
    user: req.user,
  });
};
