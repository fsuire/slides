<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Async.vue'

@Options({})
@Slide({
  path: '/rappels/promesses/<title>',
  title: '<b>Await</b>',
  nextSlide
})
export default class Await extends AbstractSlide {
  private get code(): string {
    return `const { promisify } = require('util');
  
const returnStringPromisified = promisify(require('returnString'));

const title = await returnStringPromisified('Title');
console.log(title);

const titles = await Promise.all([
  returnStringPromisified('Hello'),
  returnStringPromisified('world')
]);
titles.forEach(console.log);`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
    <p>Toute promise peut être utilisée avec <code>await</code> :</p>

    <Hljs language="javascript" :code="code" />

    <p class="warning">
      <code>await</code> ne peut être utilisé que dans une fonction asynchrone (notée avec <code>async</code>).
    </p>
  </div>
</template>

<style lang="scss"></style>
