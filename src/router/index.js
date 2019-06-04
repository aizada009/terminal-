import Vue from 'vue'
import Router from 'vue-router'
import terminal from '@/components/terminal'
import cart from '@/components/cart'
import fries from '@/components/fries'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/terminal',
      name: 'terminal',
      component: terminal
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/fries',
      name: 'fries',
      component: fries
    }
  ]
})
