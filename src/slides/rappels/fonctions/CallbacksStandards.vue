<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './ValeurDeRetour.vue'

@Options({})
@Slide({
  path: '/rappels/fonctions/<title>',
  title: 'Les callbacks <e>"standards"</e> en <b>Node.js</b>',
  nextSlide
})
export default class CallbacksStandards extends AbstractSlide {
  private get code(): string {
    return `fonctionAvecCallback(arg1, arg2, ..., (error, data) => /* callback en dernier */)`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels - Fonctions" />
    <h1 v-html="slideOptions.title"></h1>

    <p>
      Dans toute l'API de Node.js, chaque fois qu'une fonction a besoin d'un callback, sa signature adopte cette forme :
      <code>function (error, data [, otherDatas])</code>
    </p>
    <p class="fullwidth">Le premier argument contient toujours soit une erreur, soit <code>null</code></p>
    <p class="fullwidth">
      De plus, le callback est toujours le dernier argument de la fonction qui en a besoin :
    </p>
    <Hljs language="javascript" :code="code" />
    <p class="fullwidth">
      C'est une convention officieuse que l'on retrouve dans de nombreuses bibliothèques Node.js.
    </p>
  </div>
</template>

<style lang="scss"></style>
