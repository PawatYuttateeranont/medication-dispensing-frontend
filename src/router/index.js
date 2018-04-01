import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PrescriptionAddPage from '@/components/PrescriptionAddPage'
import PrescriptionPage from '@/components/PrescriptionPage'
import PrescriptionDetailPage from '@/components/PrescriptionDetailPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/create',
      name: 'PrescriptionAddPage',
      component: PrescriptionAddPage
    },
    {
      path: '/list',
      name: 'PrescriptionPage',
      component: PrescriptionPage
    },
    {
      path: '/detail',
      name: 'PrescriptionDetailPage',
      component: PrescriptionDetailPage
    }
  ]
})
