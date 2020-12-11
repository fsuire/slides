<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './RangerLesTests.vue'

@Options({})
@Slide({
  path: '/rappels/les-tests/<title>',
  title: 'Les <e>frameworks</e>',
  nextSlide
})
export default class Frameworks extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <p>Traditionnellement, en Node.js, les tests sont effectués à l'aide de toute une série d'outils :</p>
    <ul>
      <li><a href="https://www.npmjs.com/package/mocha">Mocha</a> : le framework de test en lui-même</li>
      <li><a href="https://www.npmjs.com/package/chai">Chai</a> : pour faire des assertions</li>
      <li><a href="https://www.npmjs.com/package/sinon">Sinon</a> : pour faire des stubs et des mocks</li>
      <li>
        <a href="https://www.npmjs.com/package/proxyquire">Proxyquire</a> : pour faire des stubs et des mocks avec les
        dépendances
      </li>
      <li>
        <a href="https://www.npmjs.com/package/istanbul">Istanbul</a> ou
        <a href="https://www.npmjs.com/package/nyc">Nyc</a> (plus récent) : couverture de code
      </li>
    </ul>
    <p></p>
    <p>
      Le framework <a href="https://jestjs.io/">Jest</a>, initialement développé par Facebook pour React, commence à
      être trés adopté par la communauté Node.js, car il embarque toutes les fonctionnalités nécessaires et facilite
      vraiment la vie quant à sa configuration.
    </p>
  </div>
</template>

<style lang="scss"></style>
