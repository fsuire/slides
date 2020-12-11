<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './ArgumentsParDefaut.vue'

@Options({})
@Slide({
  path: '/rappels/fonctions/<title>',
  title: 'Les <e>arrowed functions</e>',
  nextSlide
})
export default class ArrowedFunctions extends AbstractSlide {
  private get code(): string {
    return `const addition = (a, b) => {
  const result = a + b;
  return result;
}

console.log(addition(1, 1)); // 2

// quand la fonction ne contient qu'une seule instruction
// on peut se passer des accolades et du mot-clef \`return\`
const substraction = (a, b) => a - b;

console.log(substraction(2, 1)); // 1

// Si il n'y a qu'un seul argument, on peut
// se passer des parenthèses pour la signature
const substractEleven = a => a - 11;

console.log(substractEleven(11)); // 0`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels - Fonctions" />
    <h1 v-html="slideOptions.title"></h1>

    <Hljs language="javascript" :code="code" />

    <p class="warning">
      Une arrowed function <eb>n'est pas</eb> une fonction anonyme. Il y a une différence au niveau du contexte
      (<code>this</code>), et on ne peut pas donner de nom à une arrowed function.
    </p>
  </div>
</template>

<style lang="scss"></style>
