<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './HelloWorldAvecNodeJs.vue'
// import nextSlide from './UneApplication.vue'

@Options({})
@Slide({
  path: '/premiere-app/<title>',
  title: '<b>Docker</b>',
  nextSlide
})
export default class Docker extends AbstractSlide {
  private get code(): string {
    return `version: "3"
services:
  server:
    image: node:latest
    working_dir: /application
    environment:
      - NODE_ENV=development
      - PORT=3000
      - SOME_SECRET=supersecret
    volumes:
      - ./:/application:rw
    ports:
      - "3010:3000"
    command: node index.js`
  }
}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />

    <p class="advice">
      Un bon vieux <code>docker-compose.yml</code> résout facilement tous les petits problèmes locaux et prépare le
      terrain pour de futurs containers.
    </p>

    <Hljs language="yml" :code="code" />
  </div>
</template>

<style lang="scss"></style>
