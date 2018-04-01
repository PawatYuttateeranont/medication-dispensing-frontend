import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PrescriptionAddPage from '@/components/PrescriptionAddPage'
import PrescriptionPage from '@/components/PrescriptionPage'
import PrescriptionDetailPage from '@/components/PrescriptionDetailPage'
import MedicinePage from '@/components/MedicinePage'
import MedicineExpirePage from '@/components/MedicineExpirePage'

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
    },
    {
      path: '/medicine',
      name: 'MedicinePage',
      component: MedicinePage
    },
    {
      path: '/medicine-expire',
      name: 'MedicineExpirePage',
      component: MedicineExpirePage
    }
  ]
})
