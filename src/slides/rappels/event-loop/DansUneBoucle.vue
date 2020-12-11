<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './StackOverflow.vue'

@Options({})
@Slide({
  path: '/rappels/event-loop/<title>',
  title: 'Dans une <e>boucle</e>',
  nextSlide
})
export default class DansUneBoucle extends AbstractSlide {
  private get requiredImages(): string[] {
    return [
      require('./assets/boucle-01.png'),
      require('./assets/boucle-02.png'),
      require('./assets/boucle-03.png'),
      require('./assets/boucle-04.png'),
      require('./assets/boucle-05.png'),
      require('./assets/boucle-06.png'),
      require('./assets/boucle-07.png'),
      require('./assets/boucle-08.png')
    ]
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <Images :images="requiredImages" />
  </div>
</template>

<style lang="scss"></style>
