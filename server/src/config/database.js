require("dotenv").config();
import mongoose from "mongoose";

const connection = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL);
};

export default connection;
