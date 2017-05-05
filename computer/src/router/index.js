import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: [
  	{ 
  		path: '/', 
  		redirect: '/qrcode' 
  	},
    {
      path: '/qrcode',
      name: 'qrcode',
      component: require('../pages/qrcode/qrcode')
    },
    {
    	path: '/sign',
    	name: 'sign',
    	component: require('../pages/sign/sign.vue')
    },
    {
    	path: '/menu',
    	name: 'menu',
    	component: require('../pages/menu/menu.vue')
    },
    // {
    // 	path: '/wall',
    // 	name: 'wall',
    // 	component: require('../pages/wall/wall.vue')
    // },
    // {
    // 	path: '/lottery',
    // 	name: 'lottery',
    // 	component: require('../pages/lottery/lottery.vue')
    // },
    // {
    // 	path: '/collision',
    // 	name: 'collision',
    // 	component: require('../pages/collision/collision.vue')
    // },
    // {
    // 	path: '/vote',
    // 	name: 'vote',
    // 	component: require('../pages/vote/vote.vue')
    // },
    // {
    // 	path: '/reward',
    // 	name: 'reward',
    // 	component: require('../pages/reward/reward.vue')
    // }
  ]
})
