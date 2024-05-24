<template>
  <div class="home">
    <div class="addLeaveContainer">
      <div class="left">
        <div class="inputBox">
          <div class="title">First Name</div>
          <CommonInput placeholder="Type here..." id="firstName" :value="firstName" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Employee ID</div>
          <CommonInput placeholder="Type here..." id="employeeId" :value="employeeId" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Reason</div>
          <CommonInput placeholder="Type here..." id="reason" :value="reason" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Date to</div>
          <CommonDateInput id="dateTo" :value="dateTo" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Status</div>
          <CommonSelect name="status" id="status" :options="statusOptions" @input="handleChange" />
        </div>
      </div>
      <div class="right">
        <div class="inputBox">
          <div class="title">Last Name<span>(optional)</span></div>
          <CommonInput placeholder="Type here..." id="lastName" :value="lastName" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Department</div>
          <CommonInput placeholder="Type here..." id="department" :value="department" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Date from</div>
          <CommonDateInput id="dateFrom" :value="dateFrom" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Applied on Date</div>
          <CommonDateInput id="appliedDate" :value="appliedDate" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Description</div>
          <CommonTextarea placeholder="Leave reason here" id="description" :value="description" @input="handleChange" />
        </div>
      </div>
    </div>
    <div class="buttonContainer">
      <ColorButton title="Add" @click="handleAddNewLeave" />
      <BorderButton title="Cancel" @click="handleCancelLeave" />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CommonInput from '@/components/commonInput.vue';
import CommonDateInput from '@/components/commonDateInput.vue';
import CommonTextarea from '@/components/commonTextarea.vue';
import ColorButton from '@/components/colorButton.vue';
import BorderButton from '@/components/borderButton.vue';
import CommonSelect from '@/components/commonSelect.vue';

const statusOptions = [
  {
    id: 1,
    option: "Approved"
  },
  {
    id: 2,
    option: "Rejected"
  }
]

@Options({
  components: {
    CommonInput,
    CommonDateInput,
    CommonTextarea,
    ColorButton,
    BorderButton,
    CommonSelect
  },
})

export default class AddLeaveView extends Vue {
  statusOptions = statusOptions;

  firstName = '';
  lastName = '';
  employeeId = '';
  reason = '';
  department = '';
  dateTo = '';
  dateFrom = '';
  appliedDate = '';
  status = '';
  description = ''

  handleChange(event: InputEvent): void {
    const targetId = (event.target as HTMLInputElement).id;
    const newValue = (event.target as HTMLInputElement).value;
    if ( targetId === 'firstName') {
      this.firstName = newValue
    } else if(targetId === 'employeeId') {
      this.employeeId = newValue
    } else if (targetId === 'reason') {
      this.reason = newValue
    } else if (targetId === 'lastName') {
      this.lastName = newValue
    } else if (targetId === 'department') {
      this.department = newValue
    } else if (targetId === 'dateTo') {
      this.dateTo = newValue
    } else if (targetId === 'dateFrom') {
      this.dateFrom = newValue
    } else if (targetId === 'appliedDate') {
      this.appliedDate = newValue
    } else if (targetId === 'status') {
      this.status = newValue
    } else if (targetId === 'description') {
      this.description = newValue
    }
  }

  handleAddNewLeave() {
    const leaveData = {
      firstName: this.firstName,
      lastName: this.lastName,
      employeeId: this.employeeId, 
      reason: this.reason,
      department: this.department,
      dateTo: this.dateTo,
      dateFrom: this.dateFrom, 
      appliedDate: this.appliedDate, 
      description: this.description, 
      status: this.status
    }

    console.log("add Leave:::", leaveData)
  }

  handleCancelLeave() {
    this.firstName = '';
    this.lastName = '';
    this.employeeId = '';
    this.reason = '';
    this.department = '';
    this.dateTo = '';
    this.dateFrom = '';
    this.appliedDate = '';
    this.status = '';
    this.description = ''

    this.$router.push('/leave');
  }
}
</script>
<style lang="scss">
  .addLeaveContainer {
    width: 80%;
    margin: 50px auto;
    display: flex;
    gap: 50px;
  }
  .inputBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      font-size: 14px;
      font-weight: 600;
      font-family: 'PrimaryFont';
      span {
        color: #979797;
        margin-left: 5px;
      }
    }
  }
  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
</style>