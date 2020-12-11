<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './TemplatingAvecTwig.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: '<e>Hello world</e> avec <b>express.js</b>',
  nextSlide
})
export default class HelloWorldAvecExpress extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />

    <p class="warning">
      Il est souhaitable de n'installer aucune dépendance globalement. Nous pourrons ensuite utiliser son éventuel
      exécutable grâce à <code>npx</code> (livré avec <code>npm</code>) ; ou en nous servant de son raccourci
      habituellement placé dans <code>node_modules/.bin</code>.
    </p>

    <div class="grid2">
      <p class="advice">
        Garder la documentation d'<a href="https://expressjs.com/">express.js</a>&nbsp;à portée de main.
      </p>

      <p class="advice">N'oublions pas de faire un <code>npm init</code> avant tout.</p>
    </div>
  </div>
</template>

<style lang="scss"></style>
