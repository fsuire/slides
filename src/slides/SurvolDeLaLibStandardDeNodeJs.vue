<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './cookie-et-bdd/00.CookieEtBdd.vue'

@Options({})
@Slide({
  path: '/lib-standard-de-node-js',
  title: 'La <b>lib standard</b> de <e>Node.js</e>',
  nextSlide
})
export default class SurvolDeLaLibStandardDeNodeJs extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <p>Ça se passe <a href="https://nodejs.org/en/docs/">ici</a> !</p>
  </div>
</template>

<style lang="scss"></style>
