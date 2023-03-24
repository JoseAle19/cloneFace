import axios from "axios";
import { hostAdress } from "../../hostAdress";

export const apiLogin = async (datos) => {
  const data = await axios.post(`${hostAdress}/auth/login`, datos);
  return data;
};
