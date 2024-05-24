<template>
  <button class="mainButton">
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

export default class MainButton extends Vue {
  title!: string
}
</script>
<style lang="scss">
  .mainButton {
    width: -webkit-fill-available;
    padding: 15px;
    border-radius: 5px;
    border: none;
    color: #00563F;
    font-weight: 700;
    font-size: 20px;
    font-family: 'PrimaryFont';
    cursor: pointer;
  }
</style>