<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Docker.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: 'Quel <b>environnement</b> <e>local</e> ?',
  nextSlide
})
export default class QuelEnvironnementLocal extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <p>
      Dans un environnement non virtualisé, préférez l'installation de Node.js via un gestionnaire de version tel que
      <a href="https://github.com/nvm-sh/nvm">NVM</a> ou
      <a href="https://github.com/coreybutler/nvm-windows">nvm-windows</a>
    </p>
    <p class="advice">
      Si c'est possible, préférez travailler dans un environnement virtualisé, comme Docker, par exemple
    </p>
  </div>
</template>

<style lang="scss"></style>
