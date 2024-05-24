<template>
  <div class="search-input">
    <img src="../assets/icons/searchIcon.svg" alt="search" />
    <input class="searchBox" type="text" :placeholder="placeholder" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    placeholder: String
  }
})

export default class SearchInput extends Vue { 
  placeholder!: string
 }
</script>
<style lang="scss">
  .search-input {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border: 1px solid #E2E8F0;
    width: fit-content;
    border-radius: 25px;
    .searchBox {
      border: none;
      outline: none;
      font-family: 'PrimaryFont';
      font-size: 16px;
      width: 300px;
      background: #FCFCFC;
      &::placeholder {
        font-family: 'PrimaryFont';
      }
    }
  }
</style>