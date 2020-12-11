<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './QuEstCeQueNodeJs.vue'

@Options({})
@Slide({
  path: '/<title>',
  title: 'Rappels',
  nextSlide
})
export default class Rappels extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
