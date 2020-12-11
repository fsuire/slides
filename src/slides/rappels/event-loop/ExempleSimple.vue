<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './DansUneBoucle.vue'

@Options({})
@Slide({
  path: '/rappels/event-loop/<title>',
  title: 'Exemple <e>simple</e>',
  nextSlide
})
export default class ExempleSimple extends AbstractSlide {
  private get requiredImages(): string[] {
    return [
      require('./assets/exemple-simple-01.png'),
      require('./assets/exemple-simple-02.png'),
      require('./assets/exemple-simple-03.png'),
      require('./assets/exemple-simple-04.png'),
      require('./assets/exemple-simple-05.png')
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
