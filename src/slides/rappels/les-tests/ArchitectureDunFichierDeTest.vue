<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './VariablesDeTest.vue'

@Options({})
@Slide({
  path: '/rappels/les-tests/<title>',
  title: "<e>Architecture</e> d'un fichier de test",
  nextSlide
})
export default class ArchitectureDunFichierDeTest extends AbstractSlide {
  private get code(): string {
    return `// On importe toutes les dépendances qui n'ont que peut d'intérêt à être mockées
const maDependance = require('ma-dependance');

// On importe toutes les dépendances qui ont intérêt à être mockées
jest.mock('ma-dependance', () => {
  return /* code du mock */;
})

// On importe le module à tester
const sujetDuTest = require('sujet-du-test');

describe('Le sujet du test', () => {
  it('should do something', () => {
    // when
    const testResult = sujetDuTest.doSomething();

    // then
    expect(testResult).toBe('résultat attendu');
  });

  describe('le sujet du test dans un contexte particulier', () => {
    it('should do something else', () => {
      // given
      sujetDuTest.etatParticulier = true;

      // when
      const testResult = sujetDuTest.doSomething();

      // then
      expect(testResult).toBe('résultat attendu');
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
    <h2 v-html="'avec <b>Jest</b>'" />

    <Hljs language="javascript" :code="code" class="smallfont" />

    <p class="warning">
      Bien qu'il soit possible de mettre plusieurs blocs <code>describe</code> à la racine d'un fichier, ce n'est pas
      considéré comme une bonne pratique.
    </p>
  </div>
</template>

<style lang="scss"></style>
