<template>
  <div class="private-header">
    <SearchInput placeholder="Type here..." />
    <div class="avatarBox">
      <div class="avatar">
        <img src="../../assets/images/avatar.png" alt="avatar" />
      </div>
      <div class="user-info">
        <div class="fullName">Souya Handa</div>
        <div class="role">Admin</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import SearchInput from '../searchInput.vue'

  @Options({
    components: {
      SearchInput
    }
  })
  export default class PrivateHeader extends Vue {}
</script>
<style lang="scss">
  .private-header {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    background-color: #FCFCFC;
    .avatarBox {
      display: flex;
      align-items: center;
      gap: 20px;
      .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          border-radius: 50%;
        }
      }
      .user-info {
        .fullName {
          font-weight: 700;
        }
        .role {
          font-size: 14px;
        }
      }
    }
  }
</style>