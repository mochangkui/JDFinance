import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Money from '@/pages/money/Money'
import Ious from '@/pages/ious/Ious'
import Raise from '@/pages/raise/Raise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/money',
      name: 'money',
      component: Money
    }, {
      path: '/ious',
      name: 'ious',
      component: Ious
    }, {
      path: '/raise',
      name: 'raise',
      component: Raise
    }
  ]
})
