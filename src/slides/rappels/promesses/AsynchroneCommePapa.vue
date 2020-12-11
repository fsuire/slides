<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './CallbackHell.vue'

@Options({})
@Slide({
  path: '/rappels/promesses/<title>',
  title: "L'asynchrone <e>comme papa</e>",
  nextSlide
})
export default class AsynchroneCommePapa extends AbstractSlide {
  private get code(): string {
    return `const { EOL } = require('os');

process.stdout.write(\`Attention, je vais faire un truc qui dure longtemps\${EOL}\`);
process.stdout.write(\`Je le lance et je te dis quand j'ai fini.\${EOL}\`);
faisUnTrucQuiDureLongtemps(error => {
  if (error) {
    process.stderr.write(\`\${error.stack}\${EOL}\`);
    process.exit(1);
  }

  process.stdout.write(\`Ça y'est, j'ai fini le truc qui dure longtemps !\${EOL}\`);
});

process.stdout.write(\`Je lance aussi un truc moins long.\${EOL}\`);
faisUnTrucMoinsLong(error => {
  if (error) {
    process.stderr.write(\`\${error.stack}\${EOL}\`);
    process.exit(1);
  }

  process.stdout.write(\`Ça y'est, j'ai fini le truc moins long !\${EOL}\`);
});

process.stdout.write(\`Bon, le temps que ces trucs longs se fassent,\${EOL}\`);
process.stdout.write(\`je vais faire quelques petites tâches bloquantes.,\${EOL}\`);

faisTacheBloquante1();
process.stdout.write(\`Tâche bloquante 1 terminée.,\${EOL}\`);

faisTacheBloquante2();
process.stdout.write(\`Tâche bloquante 2 terminée.,\${EOL}\`);

// Attention, je vais faire un truc qui dure longtemps
// Je le lance et je te dis quand j'ai fini.
// Je lance aussi un truc moins long.
// Bon, le temps que ces trucs longs se fassent,
// je vais faire quelques petites tâches bloquantes.
// Tâche bloquante 1 terminée.
// Ça y'est, j'ai fini le truc moins long !
// Tâche bloquante 2 terminée.
// Ça y'est, j'ai fini le truc qui dure longtemps !`
  }
}
</script>

<template>
  <div class="smallfont">
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />

    <p>
      Afin de ne pas générer de code bloquant, et donc de faire du code asynchrone proprement, JavaScript se sert
      historiquement des <b>callbacks</b>
    </p>

    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
