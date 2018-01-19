import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/assets/pages/main'
import Easteregg from '@/assets/pages/easteregg'
import Millman from '@/assets/pages/millman'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/easteregg',
      name: 'Easteregg',
      component: Easteregg
    },
    {
      path: '/millman',
      name: 'Millman',
      component: Millman
    }
  ]
})
