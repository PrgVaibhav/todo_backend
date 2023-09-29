import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import router from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./env/config.env",
});

// * Using Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// * Routes
app.use("/api/user", router);
app.use("/api/task", taskRouter);

// * Using error middleware
app.use(errorMiddleware);
