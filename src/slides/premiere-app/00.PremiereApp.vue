<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './QuelEnvironnementLocal.vue'

@Options({})
@Slide({
  path: '/premiere-app',
  title: 'Première <e>app</e>',
  nextSlide
})
export default class PremiereApp extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
