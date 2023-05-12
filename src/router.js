import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
    },
    {
      path: "/platoons",
      component: () => import("@/views/platoons/PlatoonList"),
    },
    {
      path: "/platoons/:number",
      component: () => import("@/views/platoons/PlatoonUpdate"),
    },
    {
      path: "/platoons/:number/students",
      component: () => import("@/views/students/Students"),
    },
  ],
});