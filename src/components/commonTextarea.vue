<template>
  <textarea class="commonTextarea" rows="4" :placeholder="placeholder" :value="value" :id="id" @input="handleInputEvent" />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    placeholder: String,
    id: String,
    value: String,
  }
})

export default class CommonTextarea extends Vue { 
  placeholder!: string;
  id!: string;
  value!: string;
  handleInputEvent(): void {
    this.$emit('click');
  }
}
</script>
<style lang="scss">
  .commonTextarea {
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