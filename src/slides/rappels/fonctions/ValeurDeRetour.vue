<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from '../boucles-for/00.BouclesFor.vue'

@Options({})
@Slide({
  path: '/rappels/fonctions/<title>',
  title: 'Les <e>valeurs de retour</e>',
  nextSlide
})
export default class ValeurDeRetour extends AbstractSlide {
  private get code(): string {
    return `function doSomething() {
  return 'something';
}

const something = doSomething();

console.log(something); // 'something'`
  }
  private get code2(): string {
    return `function doSomething() {
  return;
}

const something = doSomething();

console.log(something); // undefined`
  }
  private get code3(): string {
    return `function doSomething() {
  //
}

const something = doSomething();

console.log(something); // undefined`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels - Fonctions" />
    <h1 v-html="slideOptions.title"></h1>

    <p class="advice">Une fonction retourne <eb>toujours</eb> quelque chose.</p>
    <Hljs language="javascript" :code="code" />
    <div class="grid2">
      <Hljs language="javascript" :code="code2" />
      <Hljs language="javascript" :code="code3" />
    </div>
  </div>
</template>

<style lang="scss"></style>
