<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Await.vue'

@Options({})
@Slide({
  path: '/rappels/promesses/<title>',
  title: '<e>util</e>.<b>promisify</b>',
  nextSlide
})
export default class UtilPromisify extends AbstractSlide {
  private get code(): string {
    return `// avant
const uneFonction = require('uneFonction');

uneFonction(argument1, (error, data) => {
  // fait quelque chose
});`
  }
  private get code2(): string {
    return `// après
const { promisify } = require('util');
const uneFonction = require('uneFonction');

const uneFonctionPromisified = promisify(uneFonction);

uneFonctionPromisified(argument1)
  .then(() => /* fait quelque chose */);`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
    <p class="advice">
      <span
        >Si le callback que vous devez écrire correspond à la convention de Node.js,
        <a href="https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original">util.promisify</a>
        peut nous aider à transformer très facilement une fonction à callback en une fonction à promise :</span
      >
    </p>

    <div class="grid2 smallerfont">
      <Hljs language="javascript" :code="code" />
      <Hljs language="javascript" :code="code2" />
    </div>
  </div>
</template>

<style lang="scss"></style>
