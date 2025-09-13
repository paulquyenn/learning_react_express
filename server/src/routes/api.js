import express from "express";
import authRouter from "./auth.route";

const routerApi = express.Router();

routerApi.get("/", (req, res) => {
  return res.status(200).json("Hello world");
});

routerApi.use("/auth", authRouter);

export default routerApi;
