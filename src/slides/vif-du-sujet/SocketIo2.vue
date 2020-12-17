<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './EcrireUneApi2.vue'

@Options({})
@Slide({
  path: '/vif-du-sujet/<title>',
  title: '<e>Socket</e><b>.io</b> #2',
  nextSlide
})
export default class SocketIo1 extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />
    <p>
      Lorsqu'on poste une nouvelle tâche depuis curl, la websocket doit mettre à jour les pages web.
    </p>
  </div>
</template>

<style lang="scss"></style>
