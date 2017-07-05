import Vue from 'vue'
import Router from 'vue-router'
import Blackboard from '@/components/drawing/Blackboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blackboard',
      component: Blackboard
    }
  ]
})
