<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from '../le-contexte/00.Contexte.vue'

@Options({})
@Slide({
  path: '/rappels/classes-et-namespaces/<title>',
  title: "<e>L'héritage</e>",
  nextSlide
})
export default class Heritage extends AbstractSlide {
  private get code(): string {
    return `class CustomError extends Error {
  constructor(...args) {
    super(...args);
  }
}

const monErreur = new CustomError('message');
console.log(monErreur instanceof Error); // true
console.log(monErreur instanceof CustomError); // true`
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
