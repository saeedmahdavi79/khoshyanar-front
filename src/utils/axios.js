import axios from "axios";
export const axiosReq = axios.create({
  //baseURL: "http://localhost:8282/api/v1",
  baseURL: "http://192.168.2.2:8282/api/v1",
});
