<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './ContexteDansUneFonction.vue'

@Options({})
@Slide({
  path: '/rappels/le-contexte',
  title: 'Le <e>contexte</e>',
  nextSlide
})
export default class Contexte extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
