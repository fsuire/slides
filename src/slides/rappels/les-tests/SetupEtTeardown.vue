<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from './OnNePeutTesterQueCeQuiEstExporte.vue'

@Options({})
@Slide({
  path: '/rappels/les-tests/<title>',
  title: '<b>Setup</b> et <e>tear down</e>',
  nextSlide
})
export default class VariablesDeTest extends AbstractSlide {
  private get code(): string {
    return `describe('describe', () => {
  beforeAll(() => {
    // Cette fonction est jouée AVANT TOUS les \`it\` de ce scope (et de ses scopes enfants)
  });
  afterAll(() => {
    // Cette fonction est jouée APRÈS TOUS les \`it\` de ce scope (et de ses scopes enfants)
  });

  beforeEach(() => {
    // Cette fonction est jouée AVANT CHAQUE \`it\` de ce scope (et de ses scopes enfants)
  });
  afterEach(() => {
    // Cette fonction est jouée APRÈS CHAQUE \`it\` de ce scope (et de ses scopes enfants)
  });

  it('should do something', () => {});
});`
  }
}
</script>

<template>
  <div>
    <UpperTitle text="Rappels" />
    <h1 v-html="slideOptions.title" />
    <h2 v-html="'avec <b>Jest</b>'" />

    <Hljs language="javascript" :code="code" />
  </div>
</template>

<style lang="scss"></style>
