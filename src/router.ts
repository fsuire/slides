import { createRouter, createWebHistory } from 'vue-router'

import slide from './slideService'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: []
})

router.beforeEach((to, from, next) => {
  slide.goToSlide(to.meta.slide.index, false)
  next()
})

export default router
