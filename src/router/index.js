import Vue from 'vue'
import Router from 'vue-router'
import base from '@/components/base'
import graph from '@/components/graph'
import graph1 from '@/components/graph1'
import graph2 from '@/components/graph2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'base',
      component: base
    },
    {
      path: '/graph',
      name: 'graph',
      component: graph
    },
    {
      path: '/graph1',
      name: 'graph1',
      component: graph1
    },
    {
      path: '/graph2',
      name: 'graph2',
      component: graph2
    }
  ]
})
