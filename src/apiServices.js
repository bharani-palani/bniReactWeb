import Axios from "axios";
import baseUrl from "./environment";

const apiInstance = Axios.create({
  baseURL: baseUrl(),
//   headers: { Authorization: Math.random() },
});

export default apiInstance;
