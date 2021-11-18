import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import News from '../views/News.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import Checkout from '../views/Checkout.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/order/:id',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
]
global.router = new VueRouter({
  routes
})
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(!localStorage.access_token && to.name === "Home"){
    next({
      name: "Login"
    })
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if(!localStorage.access_token && to.name === "News"){
    next({
      name: "Login"
    })
  } else {
    next()
  }
})
router.beforeEach((to, from, next) => {
  if(!localStorage.access_token && to.name === "Order"){
    next({
      name: "Login"
    })
  } else {
    next()
  }
})
router.beforeEach((to, from, next) => {
  if(!localStorage.access_token && to.name === "Checkout"){
    next({
      name: "Login"
    })
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if(localStorage.access_token && to.name === "Login"){
    next({
      name: 'Home'
    })
  } else{
    next()
  }
})

export default router
