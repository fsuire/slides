<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './ForEach.vue'

@Options({})
@Slide({
  path: '/rappels/boucles-for/<title>',
  title: '<e>For ... in</e> et <b>for ... of</b>',
  nextSlide
})
export default class ForInForOf extends AbstractSlide {
  private get code(): string {
    return `const unTableau = [1, 2];

let sum = 0;
for (let i in unTableau) {
  sum += unTableau[i];
}
console.log(sum); // 3

sum = 0;
for (let i of unTableau) {
  sum += i;
}
console.log(sum); // 3`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <Hljs language="javascript" :code="code" />

    <div class="grid2">
      <p class="warning">
        Si <code>for ... in</code> fonctionne également avec un tableau indexé, ce n'est pas le cas de
        <code>for ... of</code> !
      </p>
      <p class="advice">Ce type de boucle for permet l'utilisation de <code>break</code> et <code>continue</code>.</p>
    </div>
  </div>
</template>

<style lang="scss"></style>
