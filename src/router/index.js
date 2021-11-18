import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if(!localStorage.access_token) {
        next('/login')
      } else {
        next()
      }
    },
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import(/* webpackChunkName: "Bookmark" */ '../components/User.vue'),
      },
      {
        path: '/admin',
        name: 'Admin',
      }]
    },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if(localStorage.access_token) {
        next('/')
      } else {
        next()
      }
    }

  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if(localStorage.access_token) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/new-patients',
    name: 'AddPatient',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddPatient.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.access_token) {
        next('/login')
      } else {
        next()
      }
    }

  },
  {
    path: '/patients-detail/:id',
    name: 'PatientDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientDetail.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
