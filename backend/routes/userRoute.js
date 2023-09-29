import express from "express";
import {
  aboutUser,
  userLogOut,
  userLogin,
  userRegister,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);
router.get("/logout", userLogOut);
router.get("/me", isAuthenticated, aboutUser);

export default router;
