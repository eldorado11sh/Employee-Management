<template lang="">
  <div class='private-layout'>
    <SideBar />
    <div class='sideBar-right'>
      <PrivateHeader />
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import SideBar from './sideBar.vue';
  import PrivateHeader from './privateHeader.vue';

  @Options({
    components: {
      SideBar,
      PrivateHeader
    }
  })
  export default class PrivateLayout extends Vue {}
</script>
<style lang="scss">
  .private-layout {
    display: flex;
    .sideBar-right {
      padding-left: 230px;
      width: 100%;
    }
  }
</style>