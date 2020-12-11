<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './ChangerDeContexte.vue'

@Options({})
@Slide({
  path: '/rappels/le-contexte/<title>',
  title: 'Le <e>contexte</e> dans une <b>arrowed</b> function',
  nextSlide
})
export default class ContexteDansUneArrowedFonction extends AbstractSlide {
  private get code(): string {
    return `const arrowedFunction = () => {
  console.log(this);
  // show the local context \`{}\`
}

arrowedFunction();`
  }
  private get code2(): string {
    return `const arrowedFunction = () => {
  this.values = [1, 2];
  console.log(this);
  // show the local context \`values: [ 1, 2 ]\`
}

arrowedFunction();`
  }
  private get code3(): string {
    return `const arrowedFunction = () => {
  this.values = [1, 2];
  console.log(this); // show the local context \`values: [ 1, 2 ]\`

  this.values.forEach(value => {
    // arrowed functions use their parent scope (when there is one) as context
    console.log(this); // show the parent context \`values: [ 1, 2 ]\`
  });

  this.values[0]++;
}

arrowedFunction();
arrowedFunction(); // run with a brand new local scope. \`this.values[0]++;\` is not of any use.`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <div class="grid2">
      <Hljs language="javascript" :code="code" />
      <Hljs language="javascript" :code="code2" />
    </div>
    <Hljs language="javascript" :code="code3" />
  </div>
</template>

<style lang="scss"></style>
