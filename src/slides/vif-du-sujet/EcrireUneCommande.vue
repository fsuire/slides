<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './EcrireUneApi1.vue'

@Options({})
@Slide({
  path: '/vif-du-sujet/<title>',
  title: "<b>Écrire</b> une <e>commande d'administration</e>",
  nextSlide
})
export default class EcrireUneCommande extends AbstractSlide {
  private get code(): string {
    /* eslint-disable no-useless-escape */
    return `curl -i -H "api: {\"user\": {\"name\": \"coucou\"}}" curl" http://localhost:3010/tasks

curl -i -H "api: {\"user\": {\"name\": \"coucou\"}}" --data "taskLabel=Depuis curl" http://localhost:3010/task`
    /* eslint-enable */
  }
}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />
    <p>Écrire une commande d'administration qui vide le contenu de la BdD.</p>
    <p class="advice">
      Pour parser les arguments passés en ligne de commande, il faut regarder
      <a href="https://nodejs.org/dist/latest-v14.x/docs/api/process.html#process_process_argv">la doc</a>
    </p>
  </div>
</template>

<style lang="scss"></style>
