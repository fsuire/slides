<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './AsynchroneCommePapa.vue'

@Options({})
@Slide({
  path: '/rappels/promesses',
  title: 'Les <e>promesses</e>',
  nextSlide
})
export default class Promesses extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
