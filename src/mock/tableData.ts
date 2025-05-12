// 引用 Mock
import Mock from "mockjs";
const { Random } = Mock;
Mock.mock("/api/home/list", "get", {
  success: true,
  status: 200,
  "list|10": [
    {
      date: () => Random.date("yyyy-MM-dd"),
      name: () => Random.cname(),
      image: () => Random.image("200x100"),
      title: () => Mock.mock("@cword(6,10)"), // 随机2-4字中文单词
      tag: () => Mock.mock("@cword(3,6)"), // 随机2-4字中文单词
      age: () => Random.integer(10, 50) // 随机2-4字中文单词
    }
  ]
});
