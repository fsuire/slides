<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './Promesse.vue'

@Options({})
@Slide({
  path: '/rappels/promesses/<title>',
  title: '<e>Callback</e> <b>hell</b>',
  nextSlide
})
export default class CallbackHell extends AbstractSlide {
  private get code(): string {
    return `const { EOL } = require('os');

function exitIfError(error) {
  if (error) {
    process.stderr.write(\`\${error.stack}\${EOL}\`);
    process.exit(1);
  }
}

faisUnTrucQuiDureLongtemps(error => {
  exitIfError(error)

  process.stdout.write(\`Ça y'est, j'ai fini le truc qui dure longtemps !\${EOL}\`);

  faisUnTrucMoinsLong(error => {
    exitIfError(error)
  
    process.stdout.write(\`Ça y'est, j'ai fini le truc moins long !\${EOL}\`);

    faisEncoreUnAutreTruc(error => {
      exitIfError(error)
    
      process.stdout.write(\`Ça y'est, j'ai fini l'autre truc' !\${EOL}\`);
    });
  });
});`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <p>
      Si on est obligé d'attendre que la première tâche soit terminée avant de lancer la seconde, on doit faire ça :
    </p>

    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
