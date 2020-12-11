<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './PorteeDesVariables.vue'

@Options({})
@Slide({
  path: '/rappels/variables/<title>',
  title: 'Déclarer <e>une variable</e>',
  nextSlide
})
export default class DeclarerUneVariable extends AbstractSlide {
  private get code(): string {
    return `let maVariable = 1;
console.log(maVariable); // 1
maVariable = 2;
console.log(maVariable); // 2

const maConstante = 1;
console.log(maConstante); // 1
maConstante = 2; // TypeError: Assignment to constant variable.`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels - Variables" />
    <h1 v-html="slideOptions.title"></h1>

    <Hljs language="javascript" :code="code" />

    <div class="grid2">
      <p class="advice">
        Traditionnellement, le bon javascripteux n'utilise <code>let</code> que si le contenu d'une variable
        <eb>doit</eb> changer. Dans la mesure du possible, le bon javascripteux préfère toujours utiliser
        <code>const</code>.
      </p>
      <p class="warning">
        Le mot-clef <code>var</code> existe certes toujours, mais uniquement pour des raisons de rétro-compatibilité. Le
        bon javascripteux ne l'utilise <eb>jamais</eb>.
      </p>
    </div>
  </div>
</template>

<style lang="scss"></style>
