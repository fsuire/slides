<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './SetupEtTeardown.vue'

@Options({})
@Slide({
  path: '/rappels/les-tests/<title>',
  title: '<e>Variables</e> de <b>test</b>',
  nextSlide
})
export default class VariablesDeTest extends AbstractSlide {
  private get code(): string {
    return `describe('describe', () => {
  const variable = 'une variable';
  
  it('should do something', () => {
    // on peut utiliser ici \`variable\`
  });

  describe('describe deuxième niveau', () => {
    const autreVariable = 'une autre variable';

    it('should do something else', () => {
      // on peut utiliser ici \`variable\`
      // on peut utiliser ici \`autreVariable\`
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
