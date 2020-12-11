<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './FonctionsAnonymes.vue'

@Options({})
@Slide({
  path: '/rappels/fonctions/<title>',
  title: 'Les fonctions <e>classiques</e>',
  nextSlide
})
export default class FonctionsClasiques extends AbstractSlide {
  private get code(): string {
    return `function addition(a, b) {
  return a + b;
}

const myAddition = addition(1, 1);

console.log(myAddition); // 2`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels - Variables" />
    <h1 v-html="slideOptions.title"></h1>

    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
