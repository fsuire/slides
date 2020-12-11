<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './DeploiementAvecHeroku.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: 'Et si on <e>testait</e> tout ça <b>fonctionnellement</b> ?',
  nextSlide
})
export default class TesterFonctionnellement extends AbstractSlide {
  private get code(): string {
    return `module.exports = {
  testMatch: ['**/src/**/?(*.)+(spec).js'],
  coverageDirectory: '<rootDir>/coverage-spec',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules']
}`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />

    <p>Nous avons besoin de <a href="https://www.npmjs.com/package/supertest">supertest</a> pour cela.</p>

    <div class="grid2">
      <p class="advice">
        Nous avons également besoin de configurer Jest
      </p>
      <Hljs language="javascript" :code="code" />
    </div>

    <p>Et un petit script npm pour lancer les tests fonctionnels sera bienvenu !</p>
  </div>
</template>

<style lang="scss"></style>
