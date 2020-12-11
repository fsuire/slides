<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './ForInForOf.vue'

@Options({})
@Slide({
  path: '/rappels/boucles-for/<title>',
  title: 'Les <e>boucles for</e> comme <b>papa</b>',
  nextSlide
})
export default class CommePapa extends AbstractSlide {
  private get code(): string {
    return `const unTableau = [1, 2];
let sum = 0;

for (let i = 0 ; i < unTableau.length ; i++) {
  sum += unTableau[i];
}

console.log(sum); // 3`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <Hljs language="javascript" :code="code" />

    <div class="grid2">
      <p class="warning">Les boucles for ne fonctionnent pas avec des tableaux indexés !</p>
      <p class="advice">Ce type de boucle for permet l'utilisation de <code>break</code> et <code>continue</code>.</p>
    </div>
  </div>
</template>

<style lang="scss"></style>
