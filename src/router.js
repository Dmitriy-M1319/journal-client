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
    {
      path: "/classes",
      component: () => import("@/views/classes/ClassesList"),
    },
    {
      path: "/classes/create",
      component: () => import("@/views/classes/ClassCreate"),
    },
    {
      path: "/classes/:id",
      component: () => import("@/views/classes/ClassUpdate"),
    },
    {
      path: "/subjects",
      component: () => import("@/views/subjects/SubjectsList"),
    },
    {
      path: "/subjects/create",
      component: () => import("@/views/subjects/SubjectCreate"),
    },
    {
      path: "/subjects/:id",
      component: () => import("@/views/subjects/SubjectUpdate"),
    },
    {
      path: "/teachers",
      component: () => import("@/views/teachers/TeachersList"),
    },
    {
      path: "/teachers/create",
      component: () => import("@/views/teachers/TeacherCreate"),
    },
    {
      path: "/teachers/:id",
      component: () => import("@/views/teachers/TeacherUpdate"),
    },
    {
      path: "/teachers/:id/subjects",
      component: () => import("@/views/subjects/SubjectsList"),
    },
  ],
});
