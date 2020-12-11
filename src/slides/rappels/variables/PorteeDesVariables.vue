<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './TypesPrimitifs.vue'

@Options({})
@Slide({
  path: '/rappels/variables/<title>',
  title: 'Portée des <e>variables</e>',
  nextSlide
})
export default class PorteeDesVariables extends AbstractSlide {
  private get code(): string {
    return `let uneVariable = 1;

function incrementVariable() {
  uneVariable++;
  const uneAutreVariable = 'salut';
}

console.log(uneVariable); // 1
incrementVariable();
console.log(uneVariable); // 2

console.log(uneAutreVariable); // ReferenceError: uneAutreVariable is not defined`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels - Variables" />
    <h1 v-html="slideOptions.title"></h1>

    <Hljs language="javascript" :code="code" />

    <p class="advice">
      <span
        >Ce qu'il y a entre deux accolades s'appelle un <eb>scope</eb>. Un scope enfant peut accéder aux variables d'un
        scope parent, mais pas le contraire.</span
      >
    </p>
  </div>
</template>

<style lang="scss"></style>
