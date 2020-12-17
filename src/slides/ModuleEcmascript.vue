<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
// import nextSlide from './EcrireUneApi2.vue'

@Options({})
@Slide({
  path: '/<title>',
  title: '<b>Module</b> <e>Ecmascript</e>'
  // nextSlide
})
export default class ModuleEcmascript extends AbstractSlide {
  private get code(): string {
    return `
// exemple dans .eslintrc.js
module.exports = {
    // ...
    sourceType: 'module', // pour faire des modules ecmascript. 'script' par défaut.
    // ...
}`
  }
}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />
    <div class="grid2">
      <p>Node.js comprend nativement les modules ecmascript et est capable de faire communiquer les deux types.</p>
      <p class="advice">L'extension d'un fichier contenant un module ecmascript doit être <code>.mjs</code></p>
    </div>

    <p class="warning">
      Eslint considère le mélange de type de module comme une erreur et impose d'utiliser soit l'un, soit l'autre.
    </p>
    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
