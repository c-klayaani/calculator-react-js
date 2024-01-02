import { Reporter } from "../models/Reporter";
import { api } from "./api";

const postReporter = async () => {
  const response = await api.post("http://localhost:8000/api/Auth/Login",{email:'admin@reporter.com', password:'admin123'});
  console.log(response)
  return  new Reporter(response.data);
};

export { postReporter };
