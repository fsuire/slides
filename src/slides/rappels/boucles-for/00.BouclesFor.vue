<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './CommePapa.vue'

@Options({})
@Slide({
  path: '/rappels/boucles-for',
  title: 'Les <e>boucles for</e>',
  nextSlide
})
export default class BouclesFor extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
