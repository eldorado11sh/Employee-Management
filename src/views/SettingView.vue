<template>
  <div class="home">
    This is Setting page
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PrivateLayout from '@/components/layout/privateLayout.vue';

@Options({
  components: {
    PrivateLayout
  },
})
export default class SettingView extends Vue {}
</script>

<style lang="scss">
</style>