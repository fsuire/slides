<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class E extends Vue {}
</script>

<template>
  <span>
    <span class="color-emphase"><slot /></span>
  </span>
</template>
