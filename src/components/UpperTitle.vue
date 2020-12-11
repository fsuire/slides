<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    text: String
  }
})
export default class UpperTitle extends Vue {}
</script>

<template>
  <div class="UpperTitle" v-html="text" />
</template>

<style lang="scss">
.UpperTitle {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: lighter;
  margin-bottom: 0.5em;
}
</style>
