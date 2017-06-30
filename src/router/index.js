import Vue from 'vue'
import Router from 'vue-router'
import ThirdAndFifth from '@/components/ThirdAndFifth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/third-and-fifth',
      name: 'Third and Fifth notes',
      component: ThirdAndFifth
    }
  ]
})
