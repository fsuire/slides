<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Classes.vue'

@Options({})
@Slide({
  path: '/rappels/classes-et-namespaces/<title>',
  title: 'Les <e>namespaces</e>',
  nextSlide
})
export default class Namespaces extends AbstractSlide {
  private get code(): string {
    return `module.exports = {
  getHello() {
    return 'hello';
  },

  getSomething() {
    return this.getHello();
  }
};`
  }
  private get code2(): string {
    return `const { getHello, getSomething } = require('./module-du-dessus');

console.log(getHello()); // hello
console.log(getSomething()); // TypeError: this.getHello is not a function 
// le contexte de \`getSomething\` a été perdu à cause de la destructuration lors de l'import`
  }
  private get code3(): string {
    return `const moduleDuDessus = require('./module-du-dessus');

console.log(moduleDuDessus.getHello()); // hello
console.log(moduleDuDessus.getSomething()); // hello`
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
