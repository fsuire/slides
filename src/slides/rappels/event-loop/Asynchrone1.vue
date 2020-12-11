<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from '../event-loop/Asynchrone2.vue'

@Options({})
@Slide({
  path: '/rappels/event-loop/<title>',
  title: '<b>Asynchrone</b> <e>#1</e>',
  nextSlide
})
export default class Asynchrone1 extends AbstractSlide {
  private get requiredImages(): string[] {
    return [
      require('./assets/asynchrone-1-01.png'),
      require('./assets/asynchrone-1-02.png'),
      require('./assets/asynchrone-1-03.png'),
      require('./assets/asynchrone-1-04.png'),
      require('./assets/asynchrone-1-05.png'),
      require('./assets/asynchrone-1-06.png'),
      require('./assets/asynchrone-1-07.png'),
      require('./assets/asynchrone-1-08.png'),
      require('./assets/asynchrone-1-09.png'),
      require('./assets/asynchrone-1-10.png')
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
