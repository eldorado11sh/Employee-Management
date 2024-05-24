<template>
  <button class="filterButton">
    Filter
    <img :src="DownArrow" alt="downArrow" />
  </button>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DownArrow from '@/assets/icons/downArrow.svg'

@Options({
})

export default class FilterButton extends Vue {
  DownArrow = DownArrow
}
</script>
<style lang="scss">
  .filterButton {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    background-color: rgba($color: #00563F, $alpha: 0.68);
    color: white;
    font-size: 14px;
    font-family: 'PrimaryFont';
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
  }
</style>