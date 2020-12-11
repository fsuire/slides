import router from './router'
import { createDecorator } from 'vue-class-component'

import SlideOptionsInterface from './SlideOptionsInterface'
import slide from './slideService'

export default function Slide(slideOptions: SlideOptionsInterface): Function {
  const titleSlug = slideOptions.title
    .replaceAll('<e>', '')
    .replaceAll('</e>', '')
    .replaceAll('<b>', '')
    .replaceAll('</b>', '')
    .replaceAll('<eb>', '')
    .replaceAll('</eb>', '')
    .replaceAll('<i>', '')
    .replaceAll('</i>', '')
    .replaceAll('&', 'et')
    .replaceAll(' #', '-')
    .replaceAll('#', '-')
    .replaceAll('...', '-')
    .replaceAll('.', '-')
    .replaceAll(' : ', '-')
    .replaceAll(': ', '-')
    .replaceAll(':', '')
    .replaceAll('?', '')
    .replaceAll(',', '')
    .replaceAll('!', '')
    .replaceAll(';', '')
    .replaceAll(/É|È|é|è|ê|ë/g, 'e')
    .replaceAll(/û|ü|ù/g, 'u')
    .replaceAll(/î|ï/g, 'i')
    .replaceAll('À', 'a')
    .replaceAll('à', 'a')
    .trim()
    .replaceAll(' ', '-')
    .toLowerCase()

  const path = slideOptions.path.replace('<title>', titleSlug)
  slideOptions.path = path

  return createDecorator(options => {
    slide.on(`enhanced-slide_${path}`, enhancedSlide => {
      router.addRoute({
        path: path,
        component: options,
        meta: { slide: enhancedSlide }
      })
    })

    options.data = () => ({
      slideOptions: {
        ...slideOptions,
        title: slideOptions.title.replaceAll('<e>', '<span class="color-emphase">').replaceAll('</e>', '</span>')
      }
    })
  })
}
