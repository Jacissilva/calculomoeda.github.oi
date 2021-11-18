import Vue from 'vue'
import VueRouter from 'vue-router'
import Listar from '../views/Listar.vue'
import Gravar from '../views/Gravar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Listar',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/Gravar',
    name: 'Gravar',
    component: Gravar
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
