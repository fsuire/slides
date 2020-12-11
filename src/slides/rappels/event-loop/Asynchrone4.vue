<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from '@/slides/premiere-app/00.PremiereApp.vue'

@Options({})
@Slide({
  path: '/rappels/event-loop/<title>',
  title: '<b>Asynchrone</b> <e>#4</e>',
  nextSlide
})
export default class Asynchrone1 extends AbstractSlide {
  private get requiredImages(): string[] {
    return [
      require('./assets/asynchrone-4-01.png'),
      require('./assets/asynchrone-4-02.png'),
      require('./assets/asynchrone-4-03.png'),
      require('./assets/asynchrone-4-04.png'),
      require('./assets/asynchrone-4-05.png'),
      require('./assets/asynchrone-4-06.png'),
      require('./assets/asynchrone-4-07.png')
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
