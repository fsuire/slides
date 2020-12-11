<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './Tableaux.vue'

@Options({})
@Slide({
  path: '/rappels/variables/<title>',
  title: 'Types primitifs',
  nextSlide
})
export default class TypesPrimitifs extends AbstractSlide {
  private get code(): string {
    return `const b = true;
console.log(typeof b);  // boolean

const n = 10;
console.log(typeof n); // number
const f = 10.5;
console.log(typeof f); // number

const s = 'salut';
console.log(typeof s); // string

const u = undefined;
console.log(typeof u); // undefined`
  }

  private get code2(): string {
    return `function maFonction(unArgument) {
  unArgument += 10;
  console.log(unArgument)
}
const maVariable = 10;

maFonction(maVariable); // 20
console.log(maVariable); // 10`
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
        <p class="advice">Un type primitif est toujours passé par copie à une fonction.</p>

        <Hljs language="javascript" :code="code2" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
