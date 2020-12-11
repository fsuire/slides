<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './ItererSurUnTableauIndexe.vue'

@Options({})
@Slide({
  path: '/rappels/boucles-for/<title>',
  title: 'Fonction <e>Array.forEach</e></b>',
  nextSlide
})
export default class ForEach extends AbstractSlide {
  private get code(): string {
    return `const unTableau = [1, 2];

let sum = 0;
unTableau.forEach((value, index) => sum += value);

console.log(sum); // 3`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <Hljs language="javascript" :code="code" />

    <p class="advice">
      Quand il le peut, le javascripteux moderne préfère utiliser <code>Array.forEach</code> (et ses copines
      <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map">
        <code>Array.map</code>
      </a>
      et
      <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce">
        <code>Array.reduce</code>
      </a>
      ).
    </p>

    <div class="grid2">
      <p class="warning">La fonction <code>Array.forEach</code> ne fonctionne pas avec des tableaux indexés !</p>
      <p class="warning">
        Ce type de boucle <b>ne permet pas</b> l'utilisation de <code>break</code> et <code>continue</code>
      </p>
    </div>
  </div>
</template>

<style lang="scss"></style>
