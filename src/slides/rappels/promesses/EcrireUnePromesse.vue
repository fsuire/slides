<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './UtilPromisify.vue'

@Options({})
@Slide({
  path: '/rappels/promesses/<title>',
  title: 'Écrire une <e>promesse</e>',
  nextSlide
})
export default class EcrireUnePromesse extends AbstractSlide {
  private get code(): string {
    return `/**
 * @returns Promise
 */
function faisUnTrucQuiDureLongtemps() {
  // return Promise.reject();
  return Promise.resolve();
}`
  }
  private get code2(): string {
    return `/**
 * @returns Promise
 */
function faisUnTrucQuiDureLongtemps() {
  const myPromise = new Promise((resolve, reject) => {
    executionDeLaChoseQuiDureLongtemps((error, data) => {
      if (error) {
        reject(error);
      } else {
        process.stdout.write(\`Ça y'est, j'ai fini le truc qui dure longtemps !\${EOL}\`);
        resolve(data);
      }
    })
  });

  return myPromise;
}`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <Hljs language="javascript" :code="code" />
    <Hljs language="javascript" :code="code2" />
  </div>
</template>

<style lang="scss"></style>
