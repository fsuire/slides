<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './InjectionDeDependances.vue'

@Options({})
@Slide({
  path: '/cookie-et-bdd/<title>',
  title: 'Intégrer <e>Redis</e>',
  nextSlide
})
export default class IntegrerRedis extends AbstractSlide {
  private get code(): string {
    return `version: "3"
services:
  server:
    # ...
  
  redis:
    image: redis:latest
    container_name: cache
    expose:
      - 6379`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />
    <div class="grid2">
      <p>Modifions le <code>docker-compose.yml</code></p>
      <Hljs language="yml" :code="code" />
    </div>

    <p>
      Lorsqu'un utilisateur s'authentifie, soit :
    </p>

    <ul>
      <li>
        Il n'existe pas. Il faut l'enregistrer dans une clé Redis avec un id (qu'on peut créer avec
        <a href="https://www.npmjs.com/package/nanoid">nanoid</a>)
      </li>
      <li>
        Il existe. Il faut aller retrouver l'enregistrement correspondant dans Redis puis peupler le cookie avec.
      </li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
