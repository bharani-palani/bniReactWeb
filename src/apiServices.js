import Axios from "axios";
import baseUrl from "./environment";

const apiInstance = Axios.create({
  baseURL: baseUrl(),
  headers: {Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.By2r2BwheJsbrEGrHOaMQwrrmlY7wHVFzWtuEmv39fM"}
});

export default apiInstance;
