import Vue from 'vue'
import VueRouter from 'vue-router'
import SPD from '../views/MenuSPD.vue'
import DashBoard from '../views/MenuDashboard.vue'
import Profil from '../views/MenuProfil.vue'
import ChangeEmail from '../views/MenuChangeEmail.vue'
import ChangePassword from '../views/MenuChangePassword.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: DashBoard
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/SPD',
    name: 'SPD',
    component: SPD
  },
  {
    path: '/Profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/ChangeEmail',
    name: 'ChangeEmail',
    component: ChangeEmail
  },
  {
    path: '/ChangePassword',
    name: 'ChangePassword',
    component: ChangePassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
