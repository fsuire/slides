<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './ExempleSimple.vue'

@Options({})
@Slide({
  path: '/rappels/event-loop',
  title: "L'<e>event loop</e>",
  nextSlide
})
export default class EventLoop extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
