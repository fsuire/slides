<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
// import nextSlide from './Frameworks.vue'

@Options({})
@Slide({
  path: '/',
  title: "Précisions sur <e>l'installation</e> des <b>dépendances</b>"
  // nextSlide
})
export default class InstallationDeDependance extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <p>
      Pour (ré)installer toutes les dépendances d'un projet d'un seul coup, sans prendre en compte les "dev
      dependencies" :
    </p>
    <pre><code class="shell">npm i --production</code></pre>
    <p>
      Une autre solution consiste à avoir la variable d'environnement <code>NODE_ENV</code> valant
      <code>configuration</code>. Ainsi, la commande <code>npm i</code> n'installera pas les dev dependencies.
    </p>
  </div>
</template>

<style lang="scss"></style>
