<template>
  <input class="commonFileInput" type="file" :id="id" :value="value" @change="handleFileInputChange" />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    value: String,
    id: String
  }
})

export default class CommonFileInput extends Vue { 
  value!: string;
  id!: string;
  handleFileInputChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.$emit('input', file);
  }
}
</script>
<style lang="scss">
  .commonFileInput {
    border: 1px solid rgba($color: #5DBB73, $alpha: 0.73);
    outline: none;
    font-family: 'PrimaryFont';
    font-size: 16px;
    background: rgba($color: #F5F6FA, $alpha: 0.58);
    border-radius: 3px;
    padding: 10px;
    width: -webkit-fill-available;
    &::placeholder {
      font-family: 'PrimaryFont';
    }
  }
</style>