<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './PM2.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: '<e>Déploiement</e> avec <b>Heroku</b>',
  nextSlide
})
export default class DeploiementAvecHeroku extends AbstractSlide {
  private get code(): string {
    return `web: node index.js`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />

    <div class="grid2">
      <p>
        <a href="https://www.heroku.com">Heroku</a> nous servira à goûter simplement et rapidement aux problématiques
        d'un environnement de production.
      </p>
      <p class="advice">
        Afin de configurer les variables d'environnement non secrètes,
        <a href="https://www.npmjs.com/package/dotenv">dotenv</a> peut être utile.<br />Il faudra également penser à
        mettre à jour notre <code>docker-compose.yml</code> et
        <a href="https://devcenter.heroku.com/articles/config-vars">configurer Heroku</a> pour les variables
        d'environnement secrètes.
      </p>
    </div>
    <p class="advice">Heroku à besoin d'un fichier <code>Procfile</code> pour fonctionner. En voici un exemple :</p>
    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
