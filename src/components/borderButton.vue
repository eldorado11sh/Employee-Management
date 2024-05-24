<template>
  <button class="borderButton">
    {{ title }}
  </button>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    title: String
  }
})

export default class BorderButton extends Vue {
  title!: string
}
</script>
<style lang="scss">
  .borderButton {
    padding: 10px 30px;
    border-radius: 5px;
    border: none;
    border: 1px solid #00563F;
    color: #00563F;
    font-size: 14px;
    background-color: white;
    font-family: 'PrimaryFont';
    cursor: pointer;
  }
</style>