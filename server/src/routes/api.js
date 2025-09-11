import express from "express";

const routerApi = express.Router();

routerApi.get("/", (req, res) => {
  return res.status(200).json("Hello world");
});

export default routerApi;
