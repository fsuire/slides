<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './AProposDesPackageManagers.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: 'Packages <b>basiques</b>',
  nextSlide
})
export default class PackagesBasiques extends AbstractSlide {
  private get code(): string {
    return `module.exports = {
  root: true,
  env: {
    node: true,
    "jest/globals": true
  },
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'indent': ['error', 2],
    'keyword-spacing': ['error',{
      'after': true,
      'before': true
    }],
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never']
  }
};
`
  }
}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <div class="grid2">
      <ul>
        <li>
          <b><a href="https://eslint.org/">eslint</a></b> car on a toujours besoin d'un bon linter.
        </li>
        <li>
          <b><a href="https://jestjs.io/en/">jest</a></b> (et
          <a href="https://github.com/jest-community/eslint-plugin-jest#readme">eslint-plugin-jest</a>) car quoi qu'il
          en soit, on va tester un minimum.
        </li>
        <li>
          <b><a href="https://nodemon.io/">nodemon</a></b> car c'est énervant de systématiquement relancer son appli à
          la main.
        </li>
      </ul>

      <p class="advice">
        Ces packages ne sont utiles que dans les environnements de dev ou de test. Il faudra donc bien penser à les
        installer en tant que packages de développement : <code>npm i -D un-package</code>.
      </p>
    </div>

    <p>Un exemple de <code>.eslintrc.js</code> avec une config minimaliste :</p>
    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
