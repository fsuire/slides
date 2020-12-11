<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import SlideOptionsInterface from '../SlideOptionsInterface'
import slide from '../slideService'

import SummaryEntry from './SummaryEntry.vue'

type EntryType = {
  entries: EntryType[]
  path: string
  title: string
  index: number
  address: number[]
  containedIndex: number[]
  parent: EntryType | null
  registerInParent: Function
}

@Options({
  components: { SummaryEntry }
})
export default class Summary extends Vue {
  private slides: SlideOptionsInterface[] = []
  private entries: EntryType[] = []
  private currentSlideIndex = 0

  public mounted(): void {
    this.initSlides()
    slide.on('load', () => this.initSlides())
    slide.on('change-displayed-slide', () => this.initSlides())
  }

  private initSlides(): void {
    this.slides = slide.slides
    this.currentSlideIndex = slide.currentSlideIndex

    const entryParents: EntryType[] = []
    const entries: EntryType[] = []
    let previousEntry: EntryType | null = null

    for (const i in slide.slides) {
      const index = parseInt(i, 10)
      const slideOnCheck = slide.slides[index]
      const addressLength = slideOnCheck.address?.length || 1

      const previousIndex = index === 0 ? 0 : index - 1
      const previousSlide = slide.slides[previousIndex]
      const previousAddressLength = previousSlide?.address?.length || 1

      const previousParent: EntryType | null = entryParents.length === 0 ? null : entryParents[entryParents.length - 1]

      const entry: EntryType = {
        entries: [],
        path: slideOnCheck.path,
        title: slideOnCheck.title,
        index: slideOnCheck.index,
        address: slideOnCheck.address,
        containedIndex: [],
        parent: previousParent,
        registerInParent: function() {
          if (this.parent) {
            this.parent.containedIndex.push(this.index)
            this.parent.registerInParent()
          }
        }
      }

      entry.registerInParent()

      if (addressLength === previousAddressLength) {
        const pushTarget = previousParent?.entries || entries
        pushTarget.push(entry)
      } else if (previousEntry && addressLength > previousAddressLength) {
        entryParents.push(previousEntry)
        previousEntry.entries.push(entry)
      } else {
        while (entryParents.length >= addressLength) {
          entryParents.pop()
        }
        const pushTarget = entryParents.length === 0 ? entries : entryParents[entryParents.length - 1].entries
        pushTarget.push(entry)
      }

      previousEntry = entry
    }

    this.entries = entries
  }
}
</script>

<template>
  <div class="Summary">
    <h1>Summary</h1>
    <div class="Summary-content">
      <ul>
        <SummaryEntry v-for="entry in entries" :key="entry.path" :entry="entry" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.Summary {
  max-height: 100%;
  border-right: 1px solid var(--grey);
  display: flex;
  flex-direction: column;
  > h1 {
    text-align: center;
  }

  &-content {
    // flex-grow: 1;
    flex-shrink: 1;
    width: var(--summary-width);
    overflow-y: auto;

    > ul {
      font-size: 1.2em;

      ul {
        font-size: 0.85em;
      }
    }
  }
}
</style>
