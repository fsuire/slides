<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './promesses/00.Promesses.vue'

@Options({})
@Slide({
  path: '/rappels/<title>',
  title: '<e>Truthy</e> et <b>falsy</b>',
  nextSlide
})
export default class ItererSurUnTableauIndexe extends AbstractSlide {
  private get code(): string {
    return `function isTruthyOrFalsy(value) {
  if (value) {
    console.log(\`"\${value}" est truthy\`);
  } else {
    console.log(\`"\${value}" est falsy\`);
  }
}

isTruthyOrFalsy(1); // "1" est truthy
isTruthyOrFalsy(-1); // "-1" est truthy
isTruthyOrFalsy(0); // "0" est falsy

isTruthyOrFalsy('string'); // "string" est truthy
isTruthyOrFalsy(''); // "" est falsy

isTruthyOrFalsy([1, 2]); // "1,2" est truthy
isTruthyOrFalsy([]); // "" est truthy

isTruthyOrFalsy({}); // "[object Object]" est truthy
isTruthyOrFalsy({ a: 1 }); // "[object Object]" est truthy

isTruthyOrFalsy(null); // "null" est falsy
isTruthyOrFalsy(undefined); // "undefined" est falsy`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
