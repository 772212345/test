import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
class CMRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      (config) => {
        if (!config.headers["Content-Type"]) {
          if (config.method == "get") {
            config.headers["Content-Type"] = "application/json;charset=UTF-8";
          }
          if (config.method == "post") {
            config.headers["Content-Type"] = "application/x-www-form-urlencoded";
            //config.data = qs.stringify(config.data);
          }
        } else {
        }
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use((config) => {
      return config;
    });
  }
  request<T>(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: "POST" });
  }
  put<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: "PUT" });
  }
  delete<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: "DELETE" });
  }
}
export default CMRequest;
