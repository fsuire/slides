<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
// import nextSlide from './OnNePeutTesterQueCeQuiEstExporte.vue'

@Options({})
@Slide({
  path: '/',
  title: '<e>Executable</e> de <b>dépendances</b>'
  // nextSlide
})
export default class ExecutableDeDependance extends AbstractSlide {
  private get code(): string {
    return `$ npm i dependency
$ npx dependency`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <p>Dans le dossier <code>node_modules</code> on peut remarquer l'existence d'un dossier <code>.bin</code>.</p>
    <p class="advice">
      Il est souhaitable de n'installer aucune dépendance globalement. Nous pourrons ensuite utiliser son éventuel
      exécutable en utilisant `npx`
    </p>
    <Hljs language="shell" :code="code" />
  </div>
</template>

<style lang="scss"></style>
