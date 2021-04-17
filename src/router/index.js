import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/myForm',
    component: () => import('../views/MyForm.vue'),
    meta: {
      title: 'MyForm'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach(to => {
  if (!to.meta.title) {
    document.title = ''
  } else {
    document.title = to.meta.title
  }
})

export default router
