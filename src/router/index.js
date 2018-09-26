import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Module1 from '@/components/Module1'
import Module2 from '@/components/Module2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/module1',
      name: 'Module1',
      component: Module1
    },
    {
      path: '/module2',
      name: 'Module2',
      component: Module2
    }
  ]
})
