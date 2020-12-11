<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './BienCiblerSesDependances.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: 'À <b>propos</b> des <e>package managers</e>',
  nextSlide
})
export default class AProposDesPackageManagers extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <p>Un gestionnaire de paquets permet de télécharger et de gérer les dépendances d'un projet.</p>

    <div class="grid2">
      <div>
        <h2>NPM</h2>
        <ul>
          <li>Package Manager par défaut de Node.js</li>
          <li>Il est lié à la version de Node.js</li>
          <li>
            Toute l'équipe doit utiliser la même version de Node.js, et donc de NPM, afin d'éviter les conflits du
            fichier de verrouillage des versions des paquets.
          </li>
        </ul>
      </div>
      <div>
        <h2>Yarn</h2>
        <ul>
          <li>Un peu plus rapide que NPM</li>
          <li>Il n'est pas lié à la version de Node.js</li>
          <li>Il est possible d'installer Yarn en utilisant NPM mais ça n'est pas recommandé.</li>
          <li>
            En plus de devoir utiliser la même version de Node.js, toute l'équipe doit utiliser la même version de Yarn
            afin d'éviter les conflits du fichier de verrouillage des versions des paquets.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
