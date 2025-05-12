let BASE_URL = "";
const TIME_OUT = 60000;
if (import.meta.env.PROD) {
  BASE_URL = "https://www.baidu.com"; //生产环境
} else {
  BASE_URL = "/api"; //开发环境
}
export { BASE_URL, TIME_OUT };
