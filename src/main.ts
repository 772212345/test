import "normalize.css";
import "@/assets/css/index.less";
import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
// 导入 mitt
import mitt from "mitt";
import App from "./App.vue";
import router from "./router";

import "vue-waterfall-plugin-next/dist/style.css";

import ElementPlus from "element-plus";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import { VueMasonryPlugin } from "vue-masonry";

// 开发环境启用 Mock
if (import.meta.env.VITE_ENV === "DEV") {
  import("./mock/tableData").then((res) => {});
}

const app = createApp(App);

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus, {
  locale: zhCn
});
// 将 mitt 挂载到 Vue 实例上
app.config.globalProperties.$evenBus = mitt();
app.use(VueMasonryPlugin);
app.use(createPinia());
app.use(router);
app.mount("#app");
