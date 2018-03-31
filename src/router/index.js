import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DoctorOrder from '@/components/DoctorOrder'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/doctorOrder',
      name: 'DoctorOrder',
      component: DoctorOrder
    }
  ]
})
