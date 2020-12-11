<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from '@/slides/SurvolDeLaLibStandardDeNodeJs.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: '<b>PM2</b>',
  nextSlide
})
export default class DeploiementsEnGeneral extends AbstractSlide {
  private get code(): string {
    return `web: node index.js`
  }
}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <div class="grid2">
      <p>
        Dans les infrastructures modernes (Kubernetes/AWS/GCP etc) quand le container contenant votre application tombe,
        il est le plus souvent relancé en suivant des règles définies par l'op ou le devop.
      </p>
      <p class="advice">
        Si ce n'est pas le cas, l'usage de <a href="https://www.npmjs.com/package/pm2">PM2</a>, pour gérer les éventuels
        relances de l'application ou ses variables d'environnement secrètes, est recommandé.
      </p>
    </div>
  </div>
</template>

<style lang="scss"></style>
