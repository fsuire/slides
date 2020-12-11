import { EventEmitter } from 'events'

import router from './router'
import SlideOptionsInterface from './SlideOptionsInterface'

class Slide extends EventEmitter {
  public currentSlideIndex = 0

  public slides: any[] = []

  constructor() {
    super()
    this.setMaxListeners(10000)
  }

  public init(slide: any): void {
    this.slides = []
    this.analyzeSlide(slide)
    this.enhanceSlidesData()
    this.emit('load', this.slides)
  }

  private analyzeSlide(slide: any): void {
    const slideOptions: SlideOptionsInterface = slide.__c.data().slideOptions
    slideOptions.level = slideOptions.path.split('/').length - 1

    this.slides.push(slideOptions)

    if (slideOptions.nextSlide) {
      this.analyzeSlide(slideOptions.nextSlide)
    }
  }

  private enhanceSlidesData(): void {
    let index = 0
    let lastLevel = 0
    const counters = [0, 0, 0, 0, 0, 0]
    for (const slide of this.slides) {
      slide.index = index++
      slide.level = slide.path.split('/').length - 1
      const level = slide.level - 1

      if (level === lastLevel) {
        counters[level]++
      } else if (level > lastLevel) {
        lastLevel = level
        counters[level]++
      } else if (level < lastLevel) {
        while (lastLevel > level) {
          counters[lastLevel] = 0
          lastLevel--
        }
        counters[level]++
        lastLevel = level
      }

      slide.address = [...counters.slice(0, level + 1)]
      this.emit(`enhanced-slide_${slide.path}`, slide)
    }
  }

  public goRight(): void {
    const nextSlideIndex = this.currentSlideIndex + 1

    if (nextSlideIndex >= this.slides.length) {
      return
    }

    this.goToSlide(nextSlideIndex)
  }

  public goLeft(): void {
    const nextSlideIndex = this.currentSlideIndex - 1

    if (nextSlideIndex < 0) {
      return
    }

    this.goToSlide(nextSlideIndex)
  }

  public goToSlide(index: number, doesRouterPush = true) {
    const nextSlide = this.slides[index]
    const path = nextSlide.path

    this.currentSlideIndex = index
    if (doesRouterPush) {
      router.push({ path })
    }
    this.emit('change-displayed-slide')
  }
}

export default new Slide()
