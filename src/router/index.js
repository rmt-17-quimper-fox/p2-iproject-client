import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import MyCart from '../views/MyCart';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/mycart',
    name: 'MyCart',
    component: MyCart,
  },
  {
    path: '/paypal',
    name: 'Paypal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Paypal.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    (to.name == 'Login' || to.name == 'Register') &&
    localStorage.access_token
  ) {
    next({ name: 'Home' });
  } else {
    next();
  }

  if (to.name == 'MyCart' && !localStorage.access_token) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
