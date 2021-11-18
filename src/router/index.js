import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fruits from "../views/Fruits.vue"
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Quiz from '../views/Quiz.vue'
import ScoreFruit from '../components/ScoreFruit.vue'
import Cats from '../components/Cats.vue'
import MathQuiz from '../components/MathQuiz.vue'
import ScoreMath from '../components/ScoreMath.vue'
import About from '../views/About.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fruits",
    name: "Fruits",
    component: Fruits,
  },
  {
    path: "/cats",
    name: "Cats",
    component: Cats,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/math-quiz",
    name: "MathQuiz",
    component: MathQuiz,
  },
  {
    path: "/score-fruit",
    name: "ScoreFruit",
    component: ScoreFruit,
  },
  {
    path: "/score-math",
    name: "ScoreMath",
    component: ScoreMath,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Register' && !localStorage.getItem("access_token")) next()
  else if (to.name !== 'Login' && !localStorage.getItem("access_token")) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.getItem("access_token")) next({ name: 'Home' })
  else if (to.name === 'Register' && localStorage.getItem("access_token")) next({ name: 'Home' })
  else next()
})

export default router;
