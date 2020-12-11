<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './DeclarerUneVariable.vue'

@Options({})
@Slide({
  path: '/rappels/variables',
  title: 'Les <e>variables</e>',
  nextSlide
})
export default class Variables extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
