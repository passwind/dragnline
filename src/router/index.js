import Vue from 'vue'
import Router from 'vue-router'
import Blackboard from '@/components/drawing/Blackboard'
import Jquery from '@/components/drawing/Jquery'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history', // do not use /#/.
  routes: [
    {
      path: '/jquery',
      name: 'Jquery',
      component: Jquery
    },
    {
      path: '/',
      name: 'Blackboard',
      component: Blackboard
    }
  ]
})
