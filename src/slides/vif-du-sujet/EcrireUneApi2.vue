<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
// import nextSlide from './EcrireUneApi2.vue'

@Options({})
@Slide({
  path: '/vif-du-sujet/<title>',
  title: '<b>Écrire</b> une <e>API</e> #2'
  // nextSlide
})
export default class EcrireUneApi2 extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />
    <p>Lorsqu'on soumet une nouvelle tâche, notre serveur web doit avertir une autre instance de lui même.</p>

    <p class="advice">
      Un package tel que <a href="https://github.com/node-fetch/node-fetch">node-fetch</a> ou
      <a href="https://github.com/axios/axios">axios</a> sera utile.
    </p>
  </div>
</template>

<style lang="scss"></style>
