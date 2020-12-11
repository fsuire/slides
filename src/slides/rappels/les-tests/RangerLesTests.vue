<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './ArchitectureDunFichierDeTest.vue'

@Options({})
@Slide({
  path: '/rappels/les-tests/<title>',
  title: 'Où <b>ranger</b> les <e>fichiers de test</e> ?',
  nextSlide
})
export default class RangerLesTests extends AbstractSlide {
  private get code(): string {
    return `projet
 |- src
 |   |- monFichier.js
 |
 |- tests
     |- monFichier.test.js`
  }
  private get code2(): string {
    return `projet
 |- src
     |- monFichier.js
     |- monFichier.test.js`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <p>Deux façons de faire sont possibles.</p>

    <div class="grid2">
      <p>La première, plus ancienne et plus répandue :</p>
      <Hljs :code="code" />
    </div>

    <div class="grid2">
      <p>La seconde, plus moderne :</p>
      <Hljs :code="code2" />
    </div>
  </div>
</template>

<style lang="scss"></style>
