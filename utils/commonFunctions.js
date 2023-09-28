import jwt from "jsonwebtoken";

export const addCookie = (res, user, statusCode = 200, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message,
    });
};
