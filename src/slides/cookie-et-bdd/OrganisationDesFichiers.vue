<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from '../api-et-websocket/00.APIEtWebsocket.vue'

@Options({})
@Slide({
  path: '/cookie-et-bdd/<title>',
  title: '<e>Organisation</e> des <b>fichiers</b>',
  nextSlide
})
export default class Todo extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <p>
      Si on a pas encore eu le temps de le faire, c'est le moment d'en discuter !
    </p>
  </div>
</template>

<style lang="scss"></style>
