<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './HelloWorldAvecExpress.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: 'Bien <b>cibler</b> ses <e>dépendances</e>',
  nextSlide
})
export default class BienCiblerSesDependances extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <table>
      <tr>
        <td>"dependence": "~1.2.3"</td>
        <td>➔ Toutes les versions entre 1.2.3 et 1.3.0 (non incluse)</td>
      </tr>
      <tr>
        <td>"dependence": "^1.2.3"</td>
        <td>➔ Toutes les versions entre 1.2.3 et 2.0.0 (non incluse)</td>
      </tr>
      <tr>
        <td>"dependence": "&gt;=1.2.3 &lt;3.1.4"</td>
        <td>➔ Toutes les versions entre 1.2.3 et 3.1.4 (non incluse)</td>
      </tr>
    </table>

    <p class="advice">
      Le site de <a href="https://yarnpkg.com/en/docs/dependency-versions#toc-semantic-versioning">Yarn</a> propose une
      excellente explication sur ce qu'il est possible de faire avec ces numéros de versions.
    </p>
  </div>
</template>

<style lang="scss"></style>
