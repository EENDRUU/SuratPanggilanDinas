import Vue from 'vue'
import VueRouter from 'vue-router'
import SPD from '../views/MenuSPD.vue'
import DashBoard from '../views/MenuDashboard.vue'
import Profil from '../views/MenuProfil.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
