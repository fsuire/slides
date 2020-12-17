<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './SocketIo1.vue'

@Options({})
@Slide({
  path: '/vif-du-sujet/<title>',
  title: '<b>Écrire</b> une <e>API</e> #1',
  nextSlide
})
export default class EcrireUneApi1 extends AbstractSlide {
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
    <p>Écrire la route <code>GET /tasks</code> qui renverra la liste de toutes les tâches.</p>
    <p>
      Modifier la route <code>POST /task</code> afin de permettre de poster une tâche depuis un autre endroit que notre
      application.
    </p>
    <Hljs language="shell" :code="code" />

    <p class="warning">
      Ces routes doivent être accessibles depuis notre application pour les utilisateurs identifiés ; mais elles
      pourront aussi être appelées par des tiers... Comment les protéger afin que n'importe qui n'y ait pas accés ?
    </p>
  </div>
</template>

<style lang="scss"></style>
