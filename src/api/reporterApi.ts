import { Reporter } from "../models/Reporter";
import { api } from "./api";

const Login = async (email: string, password: string) => {
  const response = await api.post("http://localhost:8000/api/Auth/Login",{email, password});
  return  new Reporter(response.data);
};

export { Login };
