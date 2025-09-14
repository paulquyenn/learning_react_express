import { getAllUserService } from "../services/user.service";

export const getAllUser = async (req, res) => {
  const data = await getAllUserService();

  return res.status(200).json(data);
};
