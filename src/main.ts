import { createApp } from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import './styles/index.scss'

import e from '@/components/e.vue'
import eb from '@/components/eb.vue'
import Hljs from '@/components/Hljs.vue'
import Images from '@/components/Images.vue'
import UpperTitle from '@/components/UpperTitle.vue'

import slide from './slideService'
import Introduction from './slides/Introduction.vue'

router.addRoute({
  path: '/',
  component: Introduction
})
slide.init(Introduction)

createApp(App)
  .use(router)
  .component('e', e)
  .component('eb', eb)
  .component('Hljs', Hljs)
  .component('Images', Images)
  .component('UpperTitle', UpperTitle)
  .mount('body')
