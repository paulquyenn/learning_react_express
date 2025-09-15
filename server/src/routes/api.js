import express from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import delay from "../middlewares/delay";

const routerApi = express.Router();

routerApi.use(delay);

routerApi.get("/", (req, res) => {
  return res.status(200).json("Hello world");
});

routerApi.use("/auth", authRouter);
routerApi.use("/users", userRouter);

export default routerApi;
