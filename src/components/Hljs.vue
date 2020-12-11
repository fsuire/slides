<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import hljs from 'highlight.js'

import 'highlight.js/styles/monokai.css'

function escapeHTML(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

function hasValueOrEmptyAttribute(value: any) {
  return Boolean(value || value === '')
}

@Options({
  props: {
    language: String,
    code: String,
    autodetect: Boolean
  }
})
export default class Hljs extends Vue {
  private detectedLanguage = ''
  private unknownLanguage = false

  private get className(): string {
    if (this.unknownLanguage) return ''

    return 'hljs ' + this.detectedLanguage
  }

  private get highlighted(): string {
    // no idea what language to use, return raw code
    if (!this.autoDetect && !hljs.getLanguage((this as any).language)) {
      this.unknownLanguage = true
      return escapeHTML((this as any).code)
    }

    let result
    if (this.autoDetect) {
      result = hljs.highlightAuto((this as any).code)
      this.detectedLanguage = result.language as string
    } else {
      result = hljs.highlight((this as any).language, (this as any).code, this.ignoreIllegals)
      this.detectedLanguage = (this as any).language
    }
    return result.value
  }

  private get autoDetect(): boolean {
    return !(this as any).language || hasValueOrEmptyAttribute((this as any).autodetect)
  }

  private get ignoreIllegals(): boolean {
    return true
  }
}
</script>

<template>
  <pre><code :class="className" v-html="highlighted" /></pre>
</template>

<style lang="scss"></style>
