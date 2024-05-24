<template>
  <button class="colorButton">
    {{ title }}
  </button>
</template>
<script lang="ts">
import { Options, Vue  } from 'vue-class-component';

@Options({
  props: {
    title: String,
  }
})

export default class ColorButton extends Vue {
  title!: string;

  handleClick() {
    this.$emit('click');
  }
}
</script>
<style lang="scss">
  .colorButton {
    padding: 10px 30px;
    border-radius: 5px;
    border: none;
    background-color: #00563F;
    color: white;
    font-size: 14px;
    font-family: 'PrimaryFont';
    cursor: pointer;
  }
</style>