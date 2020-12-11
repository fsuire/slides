<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from '../fonctions/00.Fonctions.vue'

@Options({})
@Slide({
  path: '/rappels/variables/<title>',
  title: 'Types complexes : <e>Tableaux</e> et <b>hash</b>',
  nextSlide
})
export default class Tableaux extends AbstractSlide {
  private get code(): string {
    return `const a = [1, 2];
console.log(typeof a); // object
console.log(Array.isArray(a)); // true
console.log(a[0]); // 1

const ai = { a: 1, b: 2};
console.log(typeof ai); // object
console.log(Array.isArray(ai)); // false
console.log(ai.a); // 1
console.log(ai[a]); // 1

const n = null;
console.log(typeof n); // object`
  }

  private get code2(): string {
    return `function maFonction(unArgument) {
  unArgument[0] += 10;
  console.log(unArgument)
}
const maVariable = [10];

maFonction(maVariable); // [ 20 ]
console.log(maVariable); // [ 20 ]`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels - Variables" />
    <h1 v-html="slideOptions.title"></h1>
    <div class="grid2">
      <Hljs language="javascript" :code="code" />
      <div class="flexcol">
        <p class="advice">Un objet est toujours passé par référence à une fonction.</p>

        <Hljs language="javascript" :code="code2" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
