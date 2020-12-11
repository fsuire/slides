<script lang="ts">
import { Options } from 'vue-class-component'

import AbstractSlide from '@/components/AbstractSlide.vue'
import Slide from '@/Slide'

import nextSlide from './CallbacksStandards.vue'

@Options({})
@Slide({
  path: '/rappels/fonctions/<title>',
  title: 'Les fonctions de <e>callback</e>',
  nextSlide
})
export default class FonctionsDeCallback extends AbstractSlide {
  private get code(): string {
    return `const {
  grosseOperationQuiPrendDuTemps,
  grosseOperationQuiPrendMoinsDeTemps
} = require('dependance-fictive');

const writeInfo = (operationType, duration) =>
  process.write.stdout(\`L'opération "\${operationType}" a durée \${duration} secondes\`);

function doSomethingHuge(callback) {
  const duration = grosseOperationQuiPrendDuTemps(); // code bloquant
  callback('grosse opération', duration); // quand c'est débloqué, on appelle le callback
}

function doSomethingLessHuge(callback) {
  const duration = grosseOperationQuiPrendMoinsDeTemps(); // code bloquant
  callback('opération moins grosse', duration); // quand c'est débloqué, on appelle le callback
}

doSomethingHuge(writeInfo);
doSomethingLessHuge(writeInfo);

// la sortie affichera :
//      L'opération "opération moins grosse" a durée xxx secondes
//      L'opération "grosse opération" a durée yyy secondes`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels - Fonctions" />
    <h1 v-html="slideOptions.title"></h1>

    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
