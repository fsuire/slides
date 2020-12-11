<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Asynchrone1.vue'

@Options({})
@Slide({
  path: '/rappels/event-loop/<title>',
  title: '<e>Stack</e><b>overflow</b>',
  nextSlide
})
export default class StackOverflow extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <img :src="require('./assets/stack-overflow.png')" />
  </div>
</template>

<style lang="scss"></style>
