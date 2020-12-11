<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './SystemeDeLogin.vue'

@Options({})
@Slide({
  path: '/cookie-et-bdd',
  title: '<e>Cookie</e> & <b>BdD</b>',
  nextSlide
})
export default class CookieEtBdd extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
