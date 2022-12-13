import axios from "axios";
export const GetAll = (): any => {
  return axios.get("https://dummyjson.com/products?limit=100&skip=0");
};
export const GetByID = (id: any): any => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};

export const API = {
  GetAll,
  GetByID
};
