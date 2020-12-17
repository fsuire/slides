<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './SystemeDeLogin.vue'

@Options({})
@Slide({
  path: '/vif-du-sujet',
  title: 'Le <e>vif</e> du <b>sujet</b>',
  nextSlide
})
export default class VifDuSujet extends AbstractSlide {}
</script>

<template>
  <div>
    <h1 v-html="slideOptions.title" />
  </div>
</template>

<style lang="scss"></style>
