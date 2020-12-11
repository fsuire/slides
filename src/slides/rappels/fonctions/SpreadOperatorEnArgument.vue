<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './FonctionsDeCallback.vue'

@Options({})
@Slide({
  path: '/rappels/fonctions/<title>',
  title: '<e>Spread operator</e> en argument',
  nextSlide
})
export default class SpreadOperatorEnArgument extends AbstractSlide {
  private get code(): string {
    return `function addition(...values) {
  let total = 0;
  for(let value of values) {
      total += value;
  }

  return total;
}

console.log(addition(10, 10, 10, 10)); // 40`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels - Fonctions" />
    <h1 v-html="slideOptions.title"></h1>

    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
