<template lang="">
  <div class='sideBar'>
    <div class='content'>
      <div class='logo'>
        <img src='../../assets/images/logo.png' alt="logo" />
      </div>
      <div class='lists'>
        <div 
          class='list'
          :class="{ ' active': selectedItem === 'dashboard' }"
          @click="selectItem('dashboard')"
        >
          <img :src="selectedItem === 'dashboard' ? require('../../assets/icons/dashboard_white.svg') : require('../../assets/icons/dashboard.svg')" alt='dashboard' />
          <div>Dashboard</div>
        </div>
        <div class='list'
          :class="{ ' active': selectedItem === 'departments' }"
          @click="selectItem('departments')"
        >
          <img :src="selectedItem === 'departments' ? require('../../assets/icons/departments_white.svg') : require('../../assets/icons/departments.svg')" alt='dashboard' />
          <div>Departments </div>
        </div>
        <div class='list'
          :class="{ ' active': selectedItem === 'employee' }"
          @click="selectItem('employee')"
        >
          <img :src="selectedItem === 'employee' ? require('../../assets/icons/employee_white.svg') : require('../../assets/icons/employee.svg')" alt='dashboard' />
          <div>Employee Directory </div>
        </div>
        <div class='list'
          :class="{ ' active': selectedItem === 'leave' }"
          @click="selectItem('leave')"
        >
          <img :src="selectedItem === 'leave' ? require('../../assets/icons/leave_white.svg') : require('../../assets/icons/leave.svg')" alt='dashboard' />
          <div>Leave</div>
        </div>
        <div class='list'
          :class="{ ' active': selectedItem === 'setting' }"
          @click="selectItem('setting')"
        >
          <img :src="selectedItem === 'setting' ? require('../../assets/icons/setting_white.svg') : require('../../assets/icons/setting.svg')" alt='dashboard' />
          <div>Settings</div>
        </div>
      </div>
    </div>
    <div class='logout'>
      <img src='../../assets/icons/logout.svg' alt='logOut' />
      <div>Log out</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
import router from '../../router'

export default class SideBar extends Vue {
  selectedItem: string | null = null;

  initialPath = '';

  created() {
    this.initialPath = this.$route.path;
    if (this.initialPath === '/dashboard') this.selectedItem = 'dashboard'
    else if (this.initialPath === '/departments') this.selectedItem = 'departments'
    else if (this.initialPath === '/employee') this.selectedItem = 'employee'
    else if (this.initialPath === '/leave') this.selectedItem = 'leave'
    else if (this.initialPath === '/setting') this.selectedItem = 'setting'
    else if (this.initialPath === '/add-leave') this.selectedItem = 'leave'
    else if (this.initialPath === '/add-employee') this.selectedItem = 'employee'
  }

  selectItem(itemName: string) {
    this.selectedItem = itemName
    router.push(`/${itemName}`)
  }
}
</script>
<style lang="scss">
  .sideBar {
    width: 230px;
    background-color: #FCFCFC;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content {
      padding: 10px;
      .logo {
        padding: 12px;
      }
      .lists {
        display: flex;
        flex-direction: column;
        .list {
          display: flex;
          align-items: center;
          gap: 10px;
          color: black;
          font-size: 16px;
          padding: 12px;
          cursor: pointer;
          border-radius: 5px;
        }
        .active {
          background-color: #00563F;
          color: white;
        }
      }
    }
    .logout {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 12px 12px 22px;
      border-top: 1px solid rgba($color: #000000, $alpha: 0.2);

    }
  }
</style>