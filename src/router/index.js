import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    redirect: "/home/lobby",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      if (!localStorage.access_token) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
    children: [
      {
        path: "profile",
        component: () => import("../views/Profile.vue"),
      },
      {
        path: "createParty",
        name: "CreateParty",
        component: () => import("../views/PartyForm.vue"),
      },
      {
        path: "lobby",
        name: "Lobby",
        component: () => import("../views/Lobby.vue"),
      },
      {
        path: "myparties",
        name: "MyParties",
        component: () => import("../views/MyParties.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter(to, from, next) {
      if (localStorage.access_token) {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/Registration.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
