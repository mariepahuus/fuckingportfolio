import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Plakater from '../views/Plakater.vue'
import Ikoner from '../views/Ikoner.vue'
import Billeder from '../views/Billeder.vue'
import Hjemmesider from '../views/Hjemmesider.vue'
import Illu from '../views/Illu.vue'
import Logoer from '../views/Logoer.vue'
import Video from '../views/Video.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plakater',
    name: 'Plakater',
    component: Plakater
  },
  {
    path: '/ikoner',
    name: 'Ikoner',
    component: Ikoner
  },
  {
    path: '/billeder',
    name: 'Billeder',
    component: Billeder
  },
  {
    path: '/hjemmesider',
    name: 'Hjemmesider',
    component: Hjemmesider
  },
  {
    path: '/illu',
    name: 'Illu',
    component: Illu
  },
  {
    path: '/logoer',
    name: 'Logoer',
    component: Logoer
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return {x: 0, y: 0}
  },
  base: process.env.BASE_URL,
  routes
})

export default router
