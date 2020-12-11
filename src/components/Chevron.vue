<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Chevron extends Vue {}
</script>

<template>
  <svg width="50" height="50" viewBox="0 0 13.229166 13.229167" id="Chevron">
    <defs id="defs2" />
    <g inkscape:label="Calque 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-283.77082)">
      <path
        class="svg-path"
        style="fill-opacity:1;stroke:none;stroke-width:0.7284537"
        d="M 4.2402344 10.351562 L 2.1210938 12.470703 L 0 14.591797 L 2.0351562 16.626953 L 4.0703125 18.662109 L 6.1914062 16.541016 L 8.3105469 14.421875 L 6.2753906 12.386719 L 4.2402344 10.351562 z M 45.759766 10.380859 L 33.244141 22.894531 L 24.972656 31.167969 L 22.154297 28.349609 L 15.095703 21.292969 L 12.974609 23.412109 L 10.855469 25.533203 L 17.914062 32.591797 L 20.730469 35.408203 L 22.851562 37.529297 L 24.970703 39.648438 L 37.486328 27.134766 L 50 14.621094 L 47.878906 12.5 L 45.759766 10.380859 z M 9.6542969 15.849609 L 7.5332031 17.970703 L 5.4121094 20.089844 L 7.4472656 22.125 L 9.4824219 24.160156 L 11.603516 22.041016 L 13.724609 19.919922 L 11.689453 17.884766 L 9.6542969 15.849609 z "
        transform="matrix(0.26458333,0,0,0.26458333,0,283.77082)"
        id="rect831"
      />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
#Chevron {
  .svg-path {
    transition: fill 250ms ease-out, opacity 250ms ease-out;
    fill: var(--primary-color);
    opacity: 0.5;
  }

  &:hover {
    cursor: pointer;
    .svg-path {
      fill: var(--secondary-color);
      opacity: 1;
    }
  }
}
</style>
