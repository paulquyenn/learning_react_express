require("dotenv").config();
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

export const registerService = async (name, email, password) => {
  try {
    // hash password
    const hashPassword = await bcrypt.hash(password, saltRounds);

    // save new user
    const result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: "USER",
    });

    return result;
  } catch (error) {
    console.error(`[ERROR] Register service: ${error}`);
    return null;
  }
};

export const loginService = async (email, password) => {
  try {
    // fetch user by email
    const user = await User.findOne({ email: email });

    if (user) {
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        return {
          EC: 2,
          EM: "email or password not invalid",
        };
      } else {
        const payload = {
          name: user.name,
          email: user.email,
        };

        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
        });

        return {
          EC: 0,
          accessToken,
          user: { name: user.name, email: user.email },
        };
      }
    } else {
      return {
        EC: 1,
        EM: "email or password not invalid ",
      };
    }
  } catch (error) {
    console.error(`[ERROR] Login service: ${error}`);
  }
};
