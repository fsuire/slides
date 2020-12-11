<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'

import nextSlide from './variables/00.Variables.vue'

@Options({})
@Slide({
  path: '/rappels/<title>',
  title: "Qu'est-ce que <e>Node.js</e> ?",
  nextSlide
})
export default class QuEstCeQueNodeJs extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <ul>
      <li>Créé en 2009 par Ryan Dahl</li>
      <li>Permet l'exécution de code JavaScript côté serveur</li>
      <li>Utilise la machine virtuelle <a href="https://fr.wikipedia.org/wiki/V8_(moteur_JavaScript)">V8</a></li>
      <li>Exécution non bloquante</li>
      <li>Exécution mono thread</li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
