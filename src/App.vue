<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import slide from './slideService'
import Summary from '@/components/Summary.vue'

const KEY = {
  END: 35,
  HOME: 36,
  LEFT: 37,
  TOP: 38,
  RIGHT: 39,
  BOTTOM: 40,
  SPACE: 32,
  ENTER: 13,
  BAKSPACE: 8
} as any

@Options({
  components: { Summary }
})
export default class App extends Vue {
  private isSummaryShown = true

  private pageCount = `${slide.currentSlideIndex + 1}/${slide.slides.length}`

  mounted() {
    slide.on('change-displayed-slide', () => {
      this.pageCount = `${slide.currentSlideIndex + 1}/${slide.slides.length}`
    })
    document.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case KEY.RIGHT:
          slide.goRight()
          break
        case KEY.LEFT:
          slide.goLeft()
          break
        case KEY.HOME:
          slide.goToSlide(0)
          break
        case KEY.END:
          slide.goToSlide(slide.slides.length - 1)
          break
        case KEY.SPACE:
          this.toggleSummaryVisibility()
          break
      }
    })
  }

  private toggleSummaryVisibility(): void {
    this.isSummaryShown = !this.isSummaryShown
  }
}
</script>

<template>
  <div id="app">
    <transition name="App-summary-transition">
      <Summary v-show="isSummaryShown" />
    </transition>

    <section>
      <div class="App-header">
        <img src="./assets/logo-peaks.svg" />
        <div>
          <div>Node.js et le web</div>
          <div>17 & 18 décembre 2020</div>
        </div>
      </div>

      <div class="App-pageNumber">{{ pageCount }}</div>

      <router-view v-slot="{ Component }">
        <transition name="App-page-transition" mode="out-in">
          <component :is="Component" class="App-page" />
        </transition>
      </router-view>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#app > .Summary.App-summary-transition-enter-active,
#app > .Summary.App-summary-transition-leave-active {
  transition: width 250ms ease-out, opacity 250ms ease-out;
  overflow: hidden;
}
#app > .Summary.App-summary-transition-enter-from,
#app > .Summary.App-summary-transition-leave-to {
  width: 0;
  opacity: 0;
}

#app .App-page.App-page-transition-enter-active,
#app .App-page.App-page-transition-leave-active {
  transition: all 250ms ease-out;
}
#app .App-page.App-page-transition-enter-from {
  transform: translateX(100px);
  opacity: 0;
}
#app .App-page.App-page-transition-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>

<style lang="scss">
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  > .Summary {
    width: var(--summary-width);
    flex-shrink: 0;
  }

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .App-header {
      position: absolute;
      top: 0;
      left: 0;
      margin: 0.5rem;
      color: var(--secondary-color);

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        background-color: var(--secondary-color);
        padding: 0.25rem;
        font-size: 0.75em;
      }
    }

    .App-pageNumber {
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
    }
  }
}
</style>
