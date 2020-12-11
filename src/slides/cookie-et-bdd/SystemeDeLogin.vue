<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './MiddlewaresEtErreurs.vue'

@Options({})
@Slide({
  path: '/cookie-et-bdd/<title>',
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
  </div>
</template>

<style lang="scss"></style>
