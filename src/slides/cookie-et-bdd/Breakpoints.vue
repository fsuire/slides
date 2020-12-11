<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './IntegrerRedis.vue'

@Options({})
@Slide({
  path: '/cookie-et-bdd/<title>',
  title: '<e>Break</e>points',
  nextSlide
})
export default class Breakpoints extends AbstractSlide {
  private get code(): string {
    return `node --inspect src/index.js
nodemon --inspect scr/index.js`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Au boulot :)" />
    <h1 v-html="slideOptions.title" />
    <div class="grid2">
      <p class="advice">
        Node.js permet l'utilisation de points d'arrêts. il suffit d'utiliser l'argument <code>--inspect</code> (ou
        <code>--inspect-brk</code> pour forcer le processus Node.js à attendre l'initialisation du debugger pour
        démarrer) lors du lancement du script.
      </p>
      <Hljs language="yml" :code="code" />
    </div>
    <p>L'instruction <code>debugger</code>, insérée n'importe où dans le code, génère un point d'arrêt.</p>
    <p>Lorsque l'exécution s'est arrêtée sur un point, plusieurs commandes sont possibles :</p>
    <ul>
      <li><code>cont</code> ou <code>c</code> : continue l'exécution en ignorant les points d'arrêts suivants</li>
      <li><code>next</code> ou <code>n</code> : continue l'exécution jusqu'au prochain point d'arrêt</li>
      <li><code>step</code> ou <code>s</code> : step in</li>
      <li><code>out</code> ou <code>o</code> : step out</li>
    </ul>
    <div class="grid2">
      <p class="advice">Voir la <a href="https://nodejs.org/api/debugger.html">documentation du debugger Node.js</a></p>
      <p class="advice">
        Tous les IDE modernes proposent une interface plus agréable que le terminal pour travailler avec des points
        d'arrêts :<br />
        <a href="https://code.visualstudio.com/docs/nodejs/nodejs-debugging">vscode</a><br />
        <a href="https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html">webstorm</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss"></style>
