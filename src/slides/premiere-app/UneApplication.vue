<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './PackagesBasiques.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: 'Une <e>application</e> <b>Node.js</b> ?',
  nextSlide
})
export default class UneApplication extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <p>Cette appli pourra être pour de l'IOT, du web, du web front, peut importe.</p>
    <p>Qu'est-ce que vous embarqueriez de base comme packages, peu importe le but de votre appli ?</p>
  </div>
</template>

<style lang="scss"></style>
