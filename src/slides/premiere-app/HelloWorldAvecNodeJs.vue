<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './UneApplication.vue'
// import nextSlide from './BienCiblerSesDependances.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: '<e>Hello world</e> avec <b>Node.js</b>',
  nextSlide
})
export default class HelloWorldAvecNodeJs extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
