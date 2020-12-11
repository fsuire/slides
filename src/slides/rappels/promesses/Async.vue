<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './AttraperLesErreurs.vue'

@Options({})
@Slide({
  path: '/rappels/promesses/<title>',
  title: '<e>Async</e>',
  nextSlide
})
export default class Async extends AbstractSlide {
  private get code(): string {
    return `async function maFonction() {}
const maFonction2 = async function() {};
const maFonction3 = async () => {};

// Ça, c'est plutôt tendu.
uneFonctionACallback(async () => {});`
  }
  private get code2(): string {
    return `async function start() {
  // ...
  return Promise.resolve();
}

start()
  .then(() => console.log('script terminé'));`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
    <p>
      N'importe quelle fonction peut être déclarée asynchrone ; et toute fonction asynchrone pourra utiliser
      <code>await</code> dans son corps.
    </p>

    <Hljs language="javascript" :code="code" />

    <div class="grid2">
      <p class="advice">
        Pour le point d'entrée, et plus précisément pour la "fonction asynchrone d'entrée", il peut être de bon ton de
        retourner une promise (le scope principal d'un fichier n'étant pas asynchrone, on ne peut pas y utiliser
        <code>await</code>).
      </p>

      <Hljs language="javascript" :code="code2" />
    </div>
  </div>
</template>

<style lang="scss"></style>
