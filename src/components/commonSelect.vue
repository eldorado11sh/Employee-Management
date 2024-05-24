<template lang="">
  <select class='commonSelect' :name="name" :id="id" @input="handleInputEvent" >
    <option></option>
    <option v-for="option in options" :selected="selectedOption === option.option" :value="option.option" :key="option.id">{{ option.option }}</option>
  </select>
</template>
<script lang="ts">
import { Options, Vue  } from 'vue-class-component';

@Options({
  props: {
    name: String, 
    id: String,
    selectedOption: String,
    options: {
      type: Array as () => Array<{option: string, id: number}>, 
      required: true
    }
  }
})

export default class ColorButton extends Vue {
  name!: string
  id!: string
  options!: string[]
  selectedOption!: string

  handleInputEvent(): void {
    this.$emit('click');
  }
}
</script>
<style lang="scss">
  .commonSelect {
    border: 1px solid rgba($color: #5DBB73, $alpha: 0.73);
    outline: none;
    font-family: 'PrimaryFont';
    font-size: 16px;
    background: rgba($color: #F5F6FA, $alpha: 0.58);
    border-radius: 3px;
    padding: 11px 10px;
    width: -webkit-fill-available;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  
</style>