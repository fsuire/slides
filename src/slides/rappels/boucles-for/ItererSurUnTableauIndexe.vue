<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from '../TruthyEtFalsy.vue'

@Options({})
@Slide({
  path: '/rappels/boucles-for/<title>',
  title: '<e>Itérer</e> sur un <b>tableau indexé</b>',
  nextSlide
})
export default class ItererSurUnTableauIndexe extends AbstractSlide {
  private get code(): string {
    return `const unTableauIndexé = { a: 1, b: 2 };
let sum = 0;

const keys = Object.keys(unTableauIndexé);

for (let key of keys) {
  sum += unTableauIndexé[key];
}
console.log(sum); // 3

sum = 0;
keys.forEach(key => sum += unTableauIndexé[key]);
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
      Oui, c'est moche ; mais rien n'empêche de créer sa propre fonction d'itération ou d'en utiliser une déjà présente
      dans des bibliothèques comme <a href="https://lodash.com/">lodash</a>.
    </p>
  </div>
</template>

<style lang="scss"></style>
