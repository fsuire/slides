<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './ContexteDansUneArrowedFonction.vue'

@Options({})
@Slide({
  path: '/rappels/le-contexte/<title>',
  title: 'Le <e>contexte</e> dans une <b>fonction</b>',
  nextSlide
})
export default class Heritage extends AbstractSlide {
  private get code(): string {
    return `function standardFunction() {
  console.log(this); // show the Node.js global context
}

standardFunction();`
  }
  private get code2(): string {
    return `function standardFunction() {
  this.value = 1; // merge the variable \`value\` in the Node.js global context
  console.log(this); // show the Node.js global context
}

standardFunction();`
  }
  private get code3(): string {
    return `function standardFunction() {
  this.values = [1, 2]; // merge the variable \`value\` in the instance context
  console.log(this); // show the instance context

  this.values.forEach(function(value) {
    // Context has been lost.
    console.log(this); // show the Node.js global context
  });
}

const instance = new standardFunction();`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <Hljs language="javascript" :code="code" />
    <Hljs language="javascript" :code="code2" />
    <Hljs language="javascript" :code="code3" />
  </div>
</template>

<style lang="scss"></style>
