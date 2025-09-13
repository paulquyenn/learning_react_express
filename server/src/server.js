require("dotenv").config;
import express from "express";
import cors from "cors";
import routerApi from "./routes/api";
import connection from "./config/database";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/v1/api", routerApi);

(async () => {
  try {
    await connection();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR] Error: ${error}`);
  }
})();
