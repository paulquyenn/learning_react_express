import express from "express";
import { getAllUser } from "../controller/user.controller";

const userRouter = express.Router();

userRouter.get("/", getAllUser);

export default userRouter;
