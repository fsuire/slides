<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './EcrireUnePromesse.vue'

@Options({})
@Slide({
  path: '/rappels/promesses/<title>',
  title: "Si c'était <e>des promesses</e>",
  nextSlide
})
export default class Promesse extends AbstractSlide {
  private get code(): string {
    return `const { EOL } = require('os');

faisUnTrucQuiDureLongtemps()
  .then(faisUnTrucMoinsLong)
  .then(faisEncoreUnAutreTruc)
  .catch(error => {
    if (error) {
      process.stderr.write(\`\${error.stack}\${EOL}\`);
      process.exit(1);
    }
  });

tacheBloquante1();
tacheBloquante2();
tacheBloquante3();`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
