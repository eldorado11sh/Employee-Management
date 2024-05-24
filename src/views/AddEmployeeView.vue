<template>
  <div class="home">
    <div class="avatarUpload">
      <div>
        <img src="../assets/images/image.png" alt="empty" />
      </div>
      <div class="uploadText">Upload Photo</div>
    </div>
    <div class="addEmployeeContainer">
      <div class="left">
        <div class="inputBox">
          <div class="title">First Name</div>
          <CommonInput placeholder="Type here..."  id="firstName" :value="firstName" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Gender</div>
          <CommonInput placeholder="Type here..."  id="gender" :value="gender" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Employee ID</div>
          <CommonInput placeholder="Type here..."  id="employeeId" :value="employeeId" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Department</div>
          <CommonInput placeholder="Type here..."  id="department" :value="department" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Hire Date</div>
          <CommonDateInput  id="hireDate" :value="hireDate" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Time Type</div>
          <CommonSelect name="titleType" :options="timeTypeOptions"  id="timeType" :value="timeType" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Status</div>
          <CommonSelect name="status" :options="statusOptions"  id="status" :value="status" @input="handleChange" />
        </div>
      </div>
      <div class="right">
        <div class="inputBox">
          <div class="title">Last Name<span>(optional)</span></div>
          <CommonInput placeholder="Type here..."  id="lastName" :value="lastName" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Date of birth</div>
          <CommonDateInput id="birthday" :value="birthday" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Email</div>
          <CommonInput placeholder="Type here..." id="email" :value="email" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Business Title</div>
          <CommonInput placeholder="Type here..." id="businessTitle" :value="businessTitle" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Termination date<span>(if applicable)</span></div>
          <CommonInput placeholder="Type here..." id="terminateDate" :value="terminateDate" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Pay-rate type</div>
          <CommonSelect name="payType" :options="payTypeOption" id="payType" :value="payType" @input="handleChange" />
        </div>
        <div class="inputBox">
          <div class="title">Certification</div>
          <CommonFileInput id="certification" @input="handleFileSelected" />
        </div>
      </div>
    </div>
    <div class="buttonContainer">
      <ColorButton title="Add" @click="handleAddEmployee" />
      <BorderButton title="Cancel" @click="cancelEmployee" />
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
import CommonFileInput from '@/components/commonFileInput.vue';

const statusOptions = [
  {
    id: 1,
    option: "Active"
  },
  {
    id: 2,
    option: "Inactive"
  },
  {
    id: 3,
    option: "On-leave"
  },
  {
    id: 4,
    option: "Suspended"
  }
]

const timeTypeOptions = [
  {
    id: 1,
    option: "Full Time"
  },
  {
    id: 2,
    option: "Part Time"
  }
]

const payTypeOption = [
  {
    id: 1,
    option: "Salary"
  },
  {
    id: 2,
    option: "Hourly"
  }
]

@Options({
  components: {
    CommonInput,
    CommonDateInput,
    CommonTextarea,
    ColorButton,
    BorderButton,
    CommonSelect,
    CommonFileInput
  },
})

export default class AddEmployeeView extends Vue {
  statusOptions = statusOptions;
  timeTypeOptions = timeTypeOptions;
  payTypeOption = payTypeOption;

  firstName = '';
  lastName = '';
  gender = '';
  birthday = '';
  employeeId = '';
  email = '';
  department = '';
  businessTitle = '';
  hireDate = '';
  terminateDate = '';
  timeType = '';
  payType = '';
  status = '';
  selectedFile: File | null = null;

  handleChange(event: InputEvent): void {
    const targetId = (event.target as HTMLInputElement).id;
    const newValue = (event.target as HTMLInputElement).value;
    if ( targetId === 'firstName') {
      this.firstName = newValue
    } else if(targetId === 'lastName') {
      this.lastName = newValue
    } else if (targetId === 'gender') {
      this.gender = newValue
    } else if (targetId === 'birthday') {
      this.birthday = newValue
    } else if (targetId === 'employeeId') {
      this.employeeId = newValue
    } else if (targetId === 'email') {
      this.email = newValue
    } else if (targetId === 'department') {
      this.department = newValue
    } else if (targetId === 'businessTitle') {
      this.businessTitle = newValue
    } else if (targetId === 'hireDate') {
      this.hireDate = newValue
    } else if (targetId === 'terminateDate') {
      this.terminateDate = newValue
    } else if (targetId === 'timeType') {
      this.timeType = newValue
    } else if (targetId === 'payType') {
      this.payType = newValue
    } else if (targetId === 'status') {
      this.status = newValue
    } 
  }

  handleAddEmployee() {
    const employeeData = {
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender, 
      birthday: this.birthday,
      employeeId: this.employeeId,
      email: this.email,
      department: this.department, 
      businessTitle: this.businessTitle, 
      hireDate: this.hireDate, 
      terminateDate: this.terminateDate,
      timeType: this.timeType,
      payType: this.payType,
      status: this.status,
      certification: this.selectedFile
    }

    console.log("employeeData:::", employeeData)
  }

  cancelEmployee() {
    this.firstName = '';
    this.lastName = '';
    this.gender = '';
    this.birthday = '';
    this.employeeId = '';
    this.email = '';
    this.department = '';
    this.businessTitle = '';
    this.hireDate = '';
    this.terminateDate = '';
    this.timeType = '';
    this.payType = '';
    this.status = '';
    this.$router.push('/employee');
  }

  handleFileSelected(file: File): void {
    this.selectedFile = file;
  }
}
</script>
<style lang="scss">
  .avatarUpload {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    .uploadText {
      font-size: 14px;
      font-weight: 600;
      font-family: 'PrimaryFont';
      color: #00563F;
    }
  }
  .addEmployeeContainer {
    width: 80%;
    margin: 0px auto;
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