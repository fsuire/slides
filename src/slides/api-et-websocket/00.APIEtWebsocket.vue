<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './EcrireUneApi.vue'

@Options({})
@Slide({
  path: '/api-et-websocket',
  title: '<e>API</e> et <b>websocket</b>',
  nextSlide
})
export default class APIEtWebsocket extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
