import { registerService } from "../services/user.service";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const data = await registerService(name, email, password);
  return res.status(200).json(data);
};
