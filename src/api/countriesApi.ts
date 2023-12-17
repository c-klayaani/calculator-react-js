import { Country } from "../models/Country";
import { api } from "./api";

const getCountries = async () => {
  const response = await api.get("https://openholidaysapi.org/Countries");
  return response.data.map((country: any) => new Country(country));
};

export { getCountries };
