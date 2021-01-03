import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      requireAuth: true
    },
    component: () => import("@/views/home")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to.matched);
  next()
})

export default router;
