<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import slide from '../slideService'

type EntryType = {
  entries: EntryType[]
  path: string
  title: string
  index: number
  address: number[]
  containedIndex: number[]
}

@Options({
  props: ['entry'],
  name: 'SummaryEntry'
})
export default class SummaryEntry extends Vue {
  private areSubSlidesShown = true

  private originalPos = {
    originalWidth: '',
    originalPosition: '',
    originalVisibility: '',
    originalHeight: ''
  }

  private get className() {
    const entry = (this as any).entry
    return {
      'is-majorEntry': entry.address.length <= 1,
      'is-minorEntry': entry.address.length > 1
    }
  }

  private toggleSubSlidesVisibility() {
    this.areSubSlidesShown = !this.areSubSlidesShown
  }

  private isSelected(): boolean {
    const entry = (this as any).entry
    return slide.currentSlideIndex === entry.index
  }

  private goToSlide(): void {
    slide.goToSlide((this as any).entry.index)
  }

  private afterEnter(element: HTMLElement) {
    const { originalWidth, originalPosition, originalVisibility, originalHeight } = this.originalPos
    element.style.width = originalWidth
    element.style.position = originalPosition
    element.style.visibility = originalVisibility
    element.style.height = originalHeight
  }

  private enter(element: HTMLElement) {
    const width = getComputedStyle(element).width

    this.originalPos.originalWidth = element.style.width
    this.originalPos.originalPosition = element.style.position
    this.originalPos.originalVisibility = element.style.visibility
    this.originalPos.originalHeight = element.style.height

    const { originalWidth, originalPosition, originalVisibility } = this.originalPos

    element.style.width = width
    element.style.position = 'absolute'
    element.style.visibility = 'hidden'
    element.style.height = 'auto'

    const height = getComputedStyle(element).height

    element.style.width = originalWidth
    element.style.position = originalPosition
    element.style.visibility = originalVisibility
    element.style.height = '0'

    // Force repaint to make sure the
    // animation is triggered correctly.
    getComputedStyle(element).height

    requestAnimationFrame(() => {
      element.style.height = height
    })
  }

  leave(element: HTMLElement) {
    const height = getComputedStyle(element).height

    element.style.height = height

    // Force repaint to make sure the
    // animation is triggered correctly.
    getComputedStyle(element).height

    requestAnimationFrame(() => {
      element.style.height = '0'
    })
  }
}
</script>

<template>
  <li class="SummaryEntry" :class="className">
    <div :class="{ 'is-selected': isSelected() }">
      <span @click="goToSlide()">
        <span>{{ entry.address[entry.address.length - 1] }} - </span>
        <span v-html="entry.title" />
      </span>
      <div
        v-if="entry.entries.length"
        @click="toggleSubSlidesVisibility()"
        class="SummaryEntry-classToggler"
        :class="{ 'is-opened': areSubSlidesShown }"
      >
        &gt;
      </div>
    </div>
    <transition name="SummaryEntry-transition" @enter="enter" @after-enter="afterEnter" @leave="leave">
      <ul v-if="entry.entries.length && areSubSlidesShown" class="SummaryEntry-transition">
        <SummaryEntry v-for="entry in entry.entries" :key="entry.path" :entry="entry" />
      </ul>
    </transition>
  </li>
</template>

<style lang="scss" scoped>
#app .SummaryEntry-transition {
  transition-duration: 250ms;
  overflow: hidden;
}
#app > .SummaryEntry-transition-enter-active,
#app > .SummaryEntry-transition-leave-active {
  transition-property: height;
  transition-timing-function: ease-out;
}
#app > .SummaryEntry-transition-enter-from,
#app > .SummaryEntry-transition-leave-to {
  height: 0;
}
</style>

<style lang="scss">
.SummaryEntry {
  padding-left: 0.5em;
  margin-bottom: 0.5em;

  > div {
    margin-bottom: 0.5em;

    > span:first-child {
      margin-right: 0.5em;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    &.is-selected > span:first-child {
      transition: all 200ms ease-out;
      background-color: var(--secondary-color);
      padding: 0px 0.25em;

      .color-emphase {
        transition: color 200ms ease-out;
        color: white;
      }
    }
  }

  .SummaryEntry-classToggler {
    transition: all 250ms ease-out;
    position: relative;
    bottom: 0.1em;
    display: inline-block;
    transform: translateX(0.25em);
    font-weight: normal;

    &.is-opened {
      transform: rotate(90deg) translateY(-0.3em) translateX(0.1em);
    }
    &:hover {
      cursor: pointer;
      color: var(--secondary-color);
    }
  }

  &.is-majorEntry {
    font-family: 'Oswald', sans-serif;
    font-weight: lighter;
    text-transform: uppercase;
  }
  &.is-minorEntry {
    text-transform: none;
    font-family: 'Catamaran', sans-serif;
  }

  // > ul {
  //   transition-duration: 1s;
  //   overflow: hidden;
  // }
}
</style>
