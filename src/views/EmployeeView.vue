<template>
  <div class="home">
    <div class="addBox">
      <ColorButton title="Add Employee" @click="addNewEmployee" />
    </div>
    <div class="filterBox">
      <div class="searchInputBox">
        <img class="searchIcon" src="@/assets/icons/searchIcon.svg" alt="search" />
        <input 
          class="searchInput" 
          type="text" 
          placeholder="Search..." 
          :vaule="query" 
          @input="handleQueryChange" 
          @keydown="handleQueryKeyDown"
        />
      </div>
      <FilterButton />
    </div>
    <div class="tableBox">
      <table class="employeeTable">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Department</th>
            <th>Title</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr v-for="employee in displayedEmployees" :key="employee.id">
            <td>{{ formattedNumber(employee.employeeId) }}</td>
            <td>             
              <img class="avatar" src='@/assets/images/profile.jpg' alt="avatar" width="50px" />
            </td>
            <td>{{ employee.firstName + " " + employee.lastName }}</td>
            <td>{{ employee.department }}</td>
            <td>{{ employee.businessTitle }}</td>
            <td>{{ employee.gender }}</td>
            <td>{{ employee.birthday }}</td>
            <td :class="{'inactive': employee.status === 'Inactive', 'active': employee.status === 'Active'}">{{ employee.status }}</td>
            <td>
              <div class="viewDetail" @click="viewEmployee(employee)">
                <img :src="viewDetails" alt="view" />
                <div>View details</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="paginationBox">
        <div class="pageSize">
          Showing 1 to {{ pageSize }} items
        </div>
        <div class="paginationButton">
          <button class="pageButton" @click="previousPage" :disabled="currentPage === 1">
            <img :src="prevIcon" alt="previous" />
          </button>
          <div class="pageNumberBox">
            <div class="pageNumber" 
              v-for="number in totalPages" 
              :key="number" 
              :class="{ ' activePage': currentPage === number }"
              @click="displayCurrentPage(number)"
            >
              {{ number }}
            </div>
          </div>
          <button class="pageButton" @click="nextPage" :disabled="currentPage === totalPages">
            <img :src="nextIcon" alt="next" />
          </button>
        </div>
      </div>
    </div>
    <EmployeeModal :modalActive="modalActive" >
      <div class="modal-content">
        <div class="avatarBox">
          <img class="avatarImg" src="../assets/images/profile.jpg" alt="avatar" width="100px" />
          <div class="avatarText">Upload Photo</div>
        </div>
        <div class="editEmployeeContainer">
          <div class="left">
            <div class="inputBox">
              <div class="title">First Name</div>
              <CommonInput placeholder="Type here..."  id="firstName" :value="currentEmployee.firstName" @input="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Gender</div>
              <CommonInput placeholder="Type here..."  id="gender" :value="currentEmployee.gender" @input="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Employee ID</div>
              <CommonInput placeholder="Type here..."  id="employeeId" :value="currentEmployee.id" @input="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Department</div>
              <CommonInput placeholder="Type here..."  id="department" :value="currentEmployee.department" @input="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Hire Date</div>
              <CommonDateInput  id="hireDate" :value="currentEmployee.hireDate" @input="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Time Type</div>
              <CommonSelect name="timeType" :options="timeTypeOptions"  id="timeType" :selectedOption="currentEmployee.timeType" @input="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Status</div>
              <CommonSelect name="status" :options="statusOptions"  id="status" :selectedOption="currentEmployee.status" @input="handleChange" />
            </div>
          </div>
          <div class="right">
            <div class="inputBox">
              <div class="title">Last Name</div>
              <CommonInput placeholder="Type here..."  id="firstName" :value="currentEmployee.lastName" />
            </div>
            <div class="inputBox">
              <div class="title">Date of birth</div>
              <CommonDateInput id="birthday" :value="currentEmployee.birthday" @click="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Email</div>
              <CommonInput placeholder="Type here..." id="email" :value="currentEmployee.email" @input="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Business Title</div>
              <CommonInput placeholder="Type here..." id="businessTitle" :value="currentEmployee.businessTitle" @input="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Termination date<span>(if applicable)</span></div>
              <CommonInput placeholder="Type here..." id="terminateDate" :value="currentEmployee.teminateDate" @input="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Pay-rate type</div>
              <CommonSelect name="payType" :options="payTypeOption" id="payType" :selectedOption="currentEmployee.payType" @input="handleChange" />
            </div>
            <div class="inputBox">
              <div class="title">Certification</div>
              <CommonFileInput id="certification" @input="handleFileSelected" />
            </div>
            
          </div>
        </div>
        <div class="buttonContainer">
          <ColorButton title="Save" @click="saveEmployee" />
          <BorderButton title="Cancel" @click="closeModal" />
        </div>
      </div>
    </EmployeeModal>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PrivateLayout from '@/components/layout/privateLayout.vue';
import ColorButton from '@/components/colorButton.vue';
import BorderButton from '@/components/borderButton.vue';
import FilterButton from '@/components/filterButton.vue';
import EmployeeModal from '@/components/EmployeeModal.vue';
import employeeData from '@/data/employee.json';
import nextIcon from '@/assets/icons/nextButton.svg';
import prevIcon from '@/assets/icons/prevButton.svg';
import viewDetails from '@/assets/icons/viewIcon.svg';
import CommonInput from '@/components/commonInput.vue';
import CommonDateInput from '@/components/commonDateInput.vue';
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

const pageSize = 10;

interface Employee {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  department: string;
  businessTitle: string;
  hireDate: string;
  teminateDate: string,
  gender: string;
  timeType: string,
  payType: string,
  employeeId: number,
  email: string,
  birthday: string;
  status: string;
}

@Options({
  components: {
    PrivateLayout, 
    ColorButton,
    BorderButton,
    FilterButton,
    EmployeeModal,
    CommonInput,
    CommonDateInput,
    CommonSelect,
    CommonFileInput
  },
})
export default class EmployeeView extends Vue {

  employeeData = employeeData;
  prevIcon = prevIcon;
  nextIcon = nextIcon;
  currentPage = 1;
  pageSize = pageSize; 
  viewDetails = viewDetails;
  query = '';
  filteredEmployees = employeeData as Employee[];
  modalActive = false;
  currentEmployee = {} as Employee;
  statusOptions = statusOptions;
  timeTypeOptions = timeTypeOptions;
  payTypeOption = payTypeOption;
  selectedFile: File | null = null;

  get totalPages() {
    return Math.ceil(this.filteredEmployees.length / pageSize);
  }

  get displayedEmployees() {
    const start = (this.currentPage - 1) * pageSize;
    const end = start + pageSize;
    return this.filteredEmployees.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  displayCurrentPage(number: number) {
    this.currentPage = number;
  }

  addNewEmployee() {
    this.$router.push('/add-employee');
  }

  viewEmployee(employee: Employee) {
    console.log("employee::::", employee)
    this.modalActive = true
    this.currentEmployee = employee
  }

  closeModal() {
    this.modalActive = false
  }

  handleQueryChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value
    this.query = value
  }

  handleQueryKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.filteredEmployees = this.employeeData.filter((item) => item.firstName.toLowerCase().includes(this.query.toLowerCase()) || item.lastName.toLowerCase().includes(this.query.toLowerCase()))
    }
  }

  formattedNumber(number: number) {
    return number.toString().padStart(4, '0')
  }

  handleFileSelected(file: File): void {
    this.selectedFile = file;
  }

  handleChange(event: InputEvent): void {
    const targetId = (event.target as HTMLInputElement).id;
    const newValue = (event.target as HTMLInputElement).value;
    if ( targetId === 'firstName') {
      this.currentEmployee.firstName = newValue
    } else if(targetId === 'lastName') {
      this.currentEmployee.lastName = newValue
    } else if (targetId === 'gender') {
      this.currentEmployee.gender = newValue
    } else if (targetId === 'birthday') {
      this.currentEmployee.birthday = newValue
    } else if (targetId === 'employeeId') {
      this.currentEmployee.employeeId = parseInt(newValue)
    } else if (targetId === 'email') {
      this.currentEmployee.email = newValue
    } else if (targetId === 'department') {
      this.currentEmployee.department = newValue
    } else if (targetId === 'businessTitle') {
      this.currentEmployee.businessTitle = newValue
    } else if (targetId === 'hireDate') {
      this.currentEmployee.hireDate = newValue
    } else if (targetId === 'terminateDate') {
      this.currentEmployee.teminateDate = newValue
    } else if (targetId === 'timeType') {
      this.currentEmployee.timeType = newValue
    } else if (targetId === 'payType') {
      this.currentEmployee.payType = newValue
    } else if (targetId === 'status') {
      this.currentEmployee.status = newValue
    } 
  }

  saveEmployee() {
    console.log("currentEmployee.....", this.currentEmployee)
  }
}
</script>

<style lang="scss">
  .addBox {
    display: flex;
    justify-content: flex-end;
  }
  .filterBox {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    .searchInputBox {
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid #00563F;
      border-radius: 6px;
      padding: 0px 15px;
      .searchInput {
        border: none;
        outline: none;
        font-family: 'PrimaryFont';
        color: black;
        &::placeholder {
          font-family: 'PrimaryFont';
        }
      }
    }
  }
  .tableBox {
    table, th, td {
      border: 1px solid rgba($color: #00563F, $alpha: 0.12);
      border-collapse: collapse;
    }
    .employeeTable {
      width: 100%;
      th {
        background-color: #00563F;
        color: white;
        text-align: center;
        padding: 10px 10px;
      }
      td {
        text-align: center;
        padding: 10px 10px;
        font-weight: 600;
      }
      .inactive {
        color: #00563F;
      }
      .active {
        color: #E84545;
      }
      .avatar {
        border-radius: 50%;
      }
      .viewDetail {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .paginationBox {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .pageSize {
      font-size: 14px;
      font-weight: bold;
    }
    .paginationButton {
      display: flex;
      align-items: center;
      .pageButton {
        border: none;
        padding: 10px 15px;
        background-color: white;
        cursor: pointer;
      }
      .pageNumberBox {
        display: flex;
        align-items: center;
        gap: 10px;
        .pageNumber {
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
        }
        .activePage {
          color: white;
          background-color: #00563F;
        }
      }
    }
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px 0px;
    .avatarBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .avatarImg {
        border-radius: 50%;
      }
      .avatarText {
        font-size: 14px;
        font-weight: 600;
        font-family: 'PrimaryFont';
        color: #00563F;
      }
  }
  }
  .editEmployeeContainer {
    width: 80%;
    margin: 0px auto;
    display: flex;
    gap: 50px;
    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .right {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .inputBox {
      gap: 5px;
    }
  }
  
</style>