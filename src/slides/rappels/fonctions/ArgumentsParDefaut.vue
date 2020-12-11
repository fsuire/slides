<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './SpreadOperatorEnArgument.vue'

@Options({})
@Slide({
  path: '/rappels/fonctions/<title>',
  title: 'Les <e>arguments</e> par <e>défaut</e>',
  nextSlide
})
export default class ArgumentsParDefaut extends AbstractSlide {
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

    <p class="advice">
      Conseil: les arguments avec des valeurs par défaut devraient toujours être à la fin de la signature.
    </p>
  </div>
</template>

<style lang="scss"></style>
