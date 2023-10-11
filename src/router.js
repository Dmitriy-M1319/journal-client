import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/",
      component: () => import("@/views/Home"),
    },
    {
      path: "/platoons",
      component: () => import("@/views/platoons/PlatoonList"),
    },
    {
      path: "/platoons/create",
      component: () => import("@/views/platoons/PlatoonCreate"),
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
      path: "/platoons/:number/students/update",
      component: () => import("@/views/platoons/students/PlatoonStudentsUpdate"),
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
      name: "subject-create",
      component: () => import("@/views/subjects/SubjectChange"),
    },
    {
      path: "/subjects/:id",
      name: "subject-update",
      component: () => import("@/views/subjects/SubjectChange"),
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
      component: () => import("@/views/teachers/subjects/TeacherSubjects"),
    },
    {
      path: "/teachers/:id/classes_dates",
      component: () => import("@/views/classes/calendar/ClassesCalendar"),
    },
    {
      path: "/teachers/:id/classes",
      component: () => import("@/views/classes/ClassesList"),
    },
    {
      path: "/timetable",
      component: () => import("@/views/timetable/Timetable"),
    },
    {
      path: "/students/:id",
      component: () => import("@/views/students/StudentUpdate"),
    },
    {
      path: "/platoons/:number/students/create",
      component: () => import("@/views/students/StudentCreate"),
    },
    {
      path: "/journal",
      component: () => import("@/views/journal/JournalPreview"),
    },
    {
      path: "/journal/subject/:id/platoon/:number",
      name: "platoon-journal",
      component: () => import("@/views/journal/Journal"),
    },
    {
      path: "/register",
      component: () => import("@/views/users/RegisterNewUser"),
    },
  ],
});
