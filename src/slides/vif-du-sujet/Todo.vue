<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './EcrireUneCommande.vue'

@Options({})
@Slide({
  path: '/vif-du-sujet/<title>',
  title: '<b>To</b><e>do</e>',
  nextSlide
})
export default class Todo extends AbstractSlide {}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />

    <p>
      Sauvegardons en BDD une petite liste de tâches simpliste. Pour cela, il nous faut :
    </p>
    <ul>
      <li>Un formulaire minimaliste (juste un label pour la nouvelle tâche) sur la page d'accueil.</li>
      <li>Une route pour poster de nouvelles tâches.</li>
      <li>L'utilisateur doit être identifié pour accéder à cette route.</li>
      <li>On va retenir en BDD le labelde la tâche et le nom de son créateur.</li>
      <li>La page d'accueil doit présenter la liste de ces tâches.</li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
