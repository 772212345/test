import { createRouter, createWebHistory } from "vue-router";
import layout from "@/layout/layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/main/home"
    },
    {
      path: "/main",
      component: layout,
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@/views/home/home.vue")
        },
        {
          path: "page",
          name: "page",
          component: () => import("@/views/home/home.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/login.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/404.vue")
    }
  ]
});

export default router;
