<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './ArrowedFunctions.vue'

@Options({})
@Slide({
  path: '/rappels/fonctions/<title>',
  title: 'Les fonctions <e>anonymes</e>',
  nextSlide
})
export default class FonctionsAnonymes extends AbstractSlide {
  private get code(): string {
    return `let addition = function(a, b) {
  return a + b;
}

const myAddition = addition(1, 1);

console.log(myAddition); // 2

addition = 3;

const myOtherAddition = addition(1, 1); // TypeError`
  }
  private get code2(): string {
    return `let fonctionAnonyme = function oups() {
  throw 'oups !';
}

fonctionAnonyme();`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels - Fonctions" />
    <h1 v-html="slideOptions.title"></h1>

    <Hljs language="javascript" :code="code" />

    <div class="grid2">
      <p class="advice">
        Une fonction anonyme peut, paradoxalement, être nommée. Un nom de fonction apparaîtra alors dans la stacktrace ;
        ce qui est pratique pour débugger.
      </p>
      <Hljs language="javascript" :code="code2" />
    </div>
  </div>
</template>

<style lang="scss"></style>
