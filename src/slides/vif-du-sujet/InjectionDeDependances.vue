<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Todo.vue'

@Options({})
@Slide({
  path: '/vif-du-sujet/<title>',
  title: '<e>Injection</e> de <b>dépendances</b>',
  nextSlide
})
export default class InjectionDeDependances extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />

    <p class="advice">
      Pas besoin en javascript. D'ailleurs, il n'existe pas de DI populaire (à part dans le monde Angular) en js.<br />
      Il faut compter chaque <code>require</code> dans un fichier comme étant une injection de dépendance, et compter
      sur <code>jest.mock()</code> (et consorts) pour assurer un certain découplage lors des tests.
    </p>
  </div>
</template>

<style lang="scss"></style>
