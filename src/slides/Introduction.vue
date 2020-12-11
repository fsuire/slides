<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './rappels/00.Rappels.vue'

@Options({})
@Slide({
  path: '/<title>',
  title: '<b>Node.js</b> & <e>le web</e>',
  nextSlide
})
export default class Introduction extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <section>
      <p><e>Frédéric Suire</e> tech lead js & archi web</p>
    </section>
  </div>
</template>

<style lang="scss"></style>
