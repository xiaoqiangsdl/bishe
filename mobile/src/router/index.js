import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/', 
      redirect: '/scene' 
    },
    {
      path: '/scene',
      name: 'scene',
      component: require('../pages/scene/scene')
    },
    {
      path: '/wall',
      name: 'wall',
      component: require('../pages/wall/wall')
    },
    {
      path: '/sign',
      name: 'sign',
      component: require('../pages/sign/sign')
    },
    {
      path: '/menu',
      name: 'menu',
      component: require('../pages/menu/menu')
    }
  ]
})
