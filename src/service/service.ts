import { BASE_URL, TIME_OUT } from "@/service/config/config";
import CMRequest from "@/service/request/requset";

const request = new CMRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});
export default request;
