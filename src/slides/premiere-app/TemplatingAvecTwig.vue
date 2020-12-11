<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Tester.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: '<b>Templating</b> avec <e>Twig</e>',
  nextSlide
})
export default class TemplatingAvecTwig extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />

    <p>
      De nos jours, nous avons plutôt affaire avec des frameworks front très modernes. Comme ces outils ne sont pas le
      sujet de cette formation, nous allons nous occuper de notre partie front à l'ancienne, avec
      <a href="https://github.com/twigjs/twig.js">Twig</a>.
    </p>
    <p>
      Le but de l'exercice est de renvoyer une page HTML (contenant une image) si la requête contient l'en-tête
      <code>text/html</code>, sinon, continuer à renvoyer du texte.
    </p>
    <p class="advice">
      Express.js fourni un serveur statique, utile pour renvoyer tous types d'assets
    </p>
  </div>
</template>

<style lang="scss"></style>
