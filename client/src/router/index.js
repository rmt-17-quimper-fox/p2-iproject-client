import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import ForgetPasswordPage from '../views/ForgetPasswordPage.vue'
import ResetPasswordPage from '../views/ResetPasswordPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DetailPage from '../views/DetailPage.vue'
import LeaderBoardPage from '../views/LeaderBoardPage.vue'
import ForumPage from '../views/ForumPage.vue'
import PostRecipePage from '../views/PostRecipePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home-Page',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login-Page',
    component: LoginPage
  },
  {
    path: '/forgetpassword',
    name: 'Forget-Password-Page',
    component: ForgetPasswordPage
  },
  {
    path: '/resetpassword',
    name: 'Reset-Password-Page',
    component: ResetPasswordPage
  },
  {
    path: '/register',
    name: 'Register-Page',
    component: RegisterPage
  },
  {
    path: '/detail/:id',
    name: 'Detail-Page',
    component: DetailPage
  },
  {
    path: '/leaderboard',
    name: 'Leader-Board-Page',
    component: LeaderBoardPage
  },
  {
    path: '/forum',
    name: 'Forum-Page',
    component: ForumPage
  },
  {
    path: '/postrecipe',
    name: 'Post-Recipe-Page',
    component: PostRecipePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
