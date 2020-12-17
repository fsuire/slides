<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './MiddlewaresEtErreurs.vue'

@Options({})
@Slide({
  path: '/vif-du-sujet/<title>',
  title: 'Un <e>système</e> de <b>login</b> simple',
  nextSlide
})
export default class SystemeDeLogin extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />

    <p>En quelques routes :</p>

    <ul>
      <li>
        <code>GET /</code> : affiche le nom du user. Redirige vers la page de login si pas de
        <a href="https://github.com/expressjs/express/blob/master/examples/cookies/index.js">cookie</a>.
      </li>
      <li><code>GET /login</code> : Formulaire à un seul champ.</li>
      <li>
        <code>POST /login</code> : Traite le formulaire, enregistre ou met à jour le cookie puis redirige vers la page
        de login.
      </li>
    </ul>

    <p class="advice">
      Afin de pouvoir parser les cookie et le body des requêtes POST, nous allons avoir besoin de
      <a href="https://github.com/expressjs/cookie-parser">cookie-parser</a> et
      <a href="https://github.com/expressjs/body-parser">body-parser</a>.
    </p>
  </div>
</template>

<style lang="scss"></style>
