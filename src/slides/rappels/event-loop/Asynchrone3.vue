<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from '../event-loop/Asynchrone4.vue'

@Options({})
@Slide({
  path: '/rappels/event-loop/<title>',
  title: '<b>Asynchrone</b> <e>#3</e>',
  nextSlide
})
export default class Asynchrone1 extends AbstractSlide {
  private get requiredImages(): string[] {
    return [
      require('./assets/asynchrone-3-01.png'),
      require('./assets/asynchrone-3-02.png'),
      require('./assets/asynchrone-3-03.png'),
      require('./assets/asynchrone-3-04.png'),
      require('./assets/asynchrone-3-05.png'),
      require('./assets/asynchrone-3-06.png'),
      require('./assets/asynchrone-3-07.png')
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
