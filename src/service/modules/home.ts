import request from "@/service/service";

export function tableList(params: any) {
  return request.get({
    url: "/home/list"
  });
}
