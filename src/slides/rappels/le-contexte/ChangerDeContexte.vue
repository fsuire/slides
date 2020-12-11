<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from '../les-tests/00.LesTests.vue'

@Options({})
@Slide({
  path: '/rappels/le-contexte/<title>',
  title: '<b>Changer</b> de <e>contexte</e>',
  nextSlide
})
export default class ChangerDeContexte extends AbstractSlide {
  private get code(): string {
    return `function getAge() {
  return this.age;
}

// sans contexte
console.log(getAge()); // undefined

// sous forme de namespace
const michel = { age: 8, getAge };
console.log(michel.getAge()); // 8

// en forçant un contexte
const jacquesHubert = { age: 8 };
console.log(getAge.bind(jacquesHubert)()); // 8`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <p class="advice">
      En JavaScript, <code>this</code> est rarement celui qu'on croit, mais peut être celui qu'on veut.
    </p>

    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
