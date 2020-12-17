<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './SocketIo2.vue'

@Options({})
@Slide({
  path: '/vif-du-sujet/<title>',
  title: '<e>Socket</e><b>.io</b> #1',
  nextSlide
})
export default class SocketIo1 extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />
    <p>Installer <a href="https://github.com/socketio/socket.io">socket.io</a></p>
    <p>
      Lorsqu'on poste une nouvelle tâche depuis l'interface web, on ne doit plus passer par requête HTTP, mais par la
      websocket.
    </p>
  </div>
</template>

<style lang="scss"></style>
