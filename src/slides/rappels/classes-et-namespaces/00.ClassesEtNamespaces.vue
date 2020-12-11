<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Namespaces.vue'

@Options({})
@Slide({
  path: '/rappels/classes-et-namespaces',
  title: 'Les <b>classes</b> et les <e>namespaces</e>',
  nextSlide
})
export default class ClassesEtNamespaces extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
