<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Breakpoints.vue'
// import nextSlide from './IntegrerRedis.vue'

@Options({})
@Slide({
  path: '/vif-du-sujet/<title>',
  title: '<b>Middlewares</b> & <e>Erreurs</e>',
  nextSlide
})
export default class MiddlewaresEtErreurs extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />

    <ul>
      <li>
        Faire un middleware dont le but est de rediriger sur la page de login si il n'y a pas de cookie.
      </li>
      <li>
        Faire un middleware de traitement des erreurs (synchrones comme asynchrones).
      </li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
