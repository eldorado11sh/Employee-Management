<template>
  <input class="commonInput" type="text" :id="id" :value="value" @input="handleInputEvent" />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    value: String,
    id: String
  }
})

export default class CommonInput extends Vue { 
  value!: string;
  id!: string;
  handleInputEvent(): void {
    this.$emit('click');
  }
}
</script>
<style lang="scss">
  .commonInput {
    border: 1px solid rgba($color: #5DBB73, $alpha: 0.73);
    outline: none;
    font-family: 'PrimaryFont';
    font-size: 16px;
    background: rgba($color: #F5F6FA, $alpha: 0.58);
    border-radius: 3px;
    padding: 11px 10px;
    width: -webkit-fill-available;
    &::placeholder {
      font-family: 'PrimaryFont';
    }
  }
</style>