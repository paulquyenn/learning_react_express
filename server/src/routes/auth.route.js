import express from "express";
import { register, login, getMe } from "../controller/auth.controller";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

authRouter.get("/me", getMe);

export default authRouter;
