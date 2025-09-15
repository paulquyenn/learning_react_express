import User from "../models/user.model";

export const getAllUserService = async () => {
  try {
    const result = await User.find({}).select("-password");

    return result;
  } catch (error) {
    console.error(`[ERROR] fetch all user: ${error}`);
  }
};
