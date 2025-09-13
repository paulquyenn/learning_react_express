import User from "../models/user.model";
import bcrypt from "bcrypt";

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
