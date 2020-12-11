<script lang="ts">
import { Options } from 'vue-class-component'

import Slide from '@/Slide'

import AbstractSlide from '@/components/AbstractSlide.vue'
import nextSlide from '../event-loop/00.EventLoop.vue'

@Options({})
@Slide({
  path: '/rappels/les-tests/<title>',
  title: 'Test <e>asynchrone</e>',
  nextSlide
})
export default class OnNePeutTesterQueCeQuiEstExporte extends AbstractSlide {
  private get code(): string {
    return `const testSubject = () => Promise.resolve('hello');

describe('test promise', () => {
  it('should return "hello"', (done) => {
    testSubject()
      .then(result => {
        expect(result).toBe('hello');
        done();
      });
  });
});

describe('test async/await', () => {
  it('should return "hello"', async () => {
    const result = await testSubject();
    expect(result).toBe('hello');
  });
});`
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
