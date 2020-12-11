<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
  props: ['images']
})
export default class Images extends Vue {
  private images!: string[]
  private selectedIndex = 0

  private get shownImage(): string {
    return this.images[this.selectedIndex]
  }

  private decrement() {
    const newIndex = this.selectedIndex - 1
    if (newIndex < 0) {
      this.selectedIndex = this.images.length - 1

      return
    }
    this.selectedIndex = newIndex
  }

  private increment() {
    const newIndex = this.selectedIndex + 1
    if (newIndex === this.images.length) {
      this.selectedIndex = 0

      return
    }
    this.selectedIndex = newIndex
  }
}
</script>

<template>
  <div class="Images">
    <img :src="shownImage" class="Images-image" />
    <div>
      <button @click="decrement">&lt;</button>
      <span>{{ selectedIndex + 1 }}/{{ images.length }}</span>
      <button @click="increment">&gt;</button>
    </div>
  </div>
</template>

<style lang="scss">
#app .Images {
  > img {
    display: block;
    margin-bottom: 1em;
  }

  > div {
    text-align: center;

    > *:not(:last-child) {
      margin-right: 1em;
    }
  }
}
</style>
