import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Me from '@/assets/pages/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
