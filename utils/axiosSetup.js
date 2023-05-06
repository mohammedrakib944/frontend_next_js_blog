import axios from "axios";
const APIURL = "https://api.rakibwrites.com/api";
// const APIURL = "http://localhost:8080/api";
const axiosBase = axios.create({
  baseURL: APIURL,
});

export default axiosBase;
