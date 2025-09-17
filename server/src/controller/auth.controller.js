import { loginService, registerService } from "../services/auth.service";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const data = await registerService(name, email, password);

  return res.status(200).json(data);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const data = await loginService(email, password);

  return res.status(200).json(data);
};

export const getMe = async (req, res) => {
  return res.status(200).json(req.user);
};
