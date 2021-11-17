import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import LoginPage from "../views/LoginPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/series",
    name: "SeriesPage",
    component: () => import("../views/SeriesPage.vue"),
  },
  {
    path: "/series/:serieId",
    name: "SerieDetailPage",
    component: () => import("../views/SerieDetailPage.vue"),
    children: [
      { path: 'season/:seasonId', name: "SeriesSeasonComp", component: () => import("../components/SeriesSeasonsComp.vue") }
    ]
  },
  {
    path: "/watchlist",
    name: "WatchListPage",
    component: () => import("../views/WatchListPage.vue"),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let authPages = ['/register','/login']
  let destIsAuth = authPages.includes(to.path)

  if (to.path == "/watchlist" && !localStorage.access_token)
    next({ path: '/login' });
  else next();

  if ( destIsAuth && localStorage.access_token) next({ path: '/' });
  else next();
});

export default router;
