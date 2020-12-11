<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './FonctionsClassiques.vue'

@Options({})
@Slide({
  path: '/rappels/fonctions',
  title: 'Les <e>fonctions</e>',
  nextSlide
})
export default class Fonctions extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
