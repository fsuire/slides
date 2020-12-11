<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './TestAsynchrone.vue'

@Options({})
@Slide({
  path: '/rappels/les-tests/<title>',
  title: 'On ne peut <e>tester</e> que ce qui est <b>exporté</b>',
  nextSlide
})
export default class OnNePeutTesterQueCeQuiEstExporte extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <p>Par "exporté", on entend "ce qui est fait parti d'un bloc <code>module.exports</code>".</p>

    <div class="grid2">
      <p class="warning">
        Ce n'est pas une bonne pratique que d'exporter des choses depuis le fichier qui sert de point d'entrée à notre
        application.
      </p>
      <p class="advice">
        Si (et seulement si) vous êtes en train de développer une bibliothèque (et pas une application), alors il est au
        contraire recommandé d'avoir un <code>module.exports</code> dans votre point d'entrée.
      </p>
    </div>
  </div>
</template>

<style lang="scss"></style>
