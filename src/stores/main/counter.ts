import { defineStore } from "pinia";
import { useRouter, useRoute } from "vue-router";

interface oogg {
  title: string;
  icon?: string;
}
interface aaaaa {
  path: string;
  meta: oogg;
}
export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      visitedViews: [{ path: "/", meta: { title: "sss" } }]
    };
  },
  actions: {
    add(item: aaaaa) {
      let isLife: string[] = [];
      this.visitedViews.forEach((item) => {
        isLife.push(item.path);
      });
      isLife.indexOf(item.path);
      if (isLife.indexOf(item.path) == -1) {
        this.visitedViews.push(item);
      }
    },
    del(par: aaaaa, path: string) {
      console.log("routers", path);
      this.visitedViews = this.visitedViews.filter((item) => {
        return item.path !== par.path;
      });
      // console.log("visitedViews", JSON.parse(JSON.stringify(this.visitedViews)));
    }
  }
});
