import express from "express";
import {
  deleteTask,
  createTask,
  getAllTask,
  updateTask,
} from "../controllers/taskController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const taskRouter = express.Router();

taskRouter.post("/create", isAuthenticated, createTask);
taskRouter.get("/all", isAuthenticated, getAllTask);

taskRouter
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default taskRouter;
