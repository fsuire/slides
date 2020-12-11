<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Heritage.vue'

@Options({})
@Slide({
  path: '/rappels/classes-et-namespaces/<title>',
  title: 'Les <e>classes</e>',
  nextSlide
})
export default class Classes extends AbstractSlide {
  private get code(): string {
    return `class Personne {
  constructor(nom, prenom, dateNaissance) {
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.dateNaissance;
  }

  set age(age) {
    throw new Error('An age cannot be setted');
  }
}

Personne.variableStatique = 'une variable statique';

const bernardYves = new Personne('Trucmuche', 'Bernard-Yves', 1992);
console.log(typeof bernardYves); // object
console.log(bernardYves instanceof Personne); // true
console.log(bernardYves.age); // 27
console.log(Personne.variableStatique); // une variable statique

module.exports = Personne;

// Exporter "façon simili singleton"
// module.exports = bernardYves`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <Hljs language="javascript" :code="code" />

    <p class="warning">
      Pour déclarer des variables dans une classe, il faut soit passer par le constructeur, soit passer par des
      getter/setter (comme nous venons de faire pour <code>age</code>)
    </p>
  </div>
</template>

<style lang="scss"></style>
