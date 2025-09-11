require("dotenv").config;
import express from "express";
import routerApi from "./routes/api";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/api/", routerApi);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
