<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Frameworks.vue'

@Options({})
@Slide({
  path: '/rappels/les-tests',
  title: 'Les <e>tests</e>',
  nextSlide
})
export default class LesTests extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
