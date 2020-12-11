<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from '../classes-et-namespaces/00.ClassesEtNamespaces.vue'

@Options({})
@Slide({
  path: '/rappels/promesses/<title>',
  title: 'Attraper <e>les erreurs</e>',
  nextSlide
})
export default class AttraperLesErreurs extends AbstractSlide {
  private get code(): string {
    return `function fetchSomething() {
  // throw new Error('argh');
  // return new Promise((resolve, reject) => reject('argh'));
}

async function doSomething() {
  try {
    const something = await fetchSomething();
  } catch (error) {
    console.error(error);
  }
}`
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
