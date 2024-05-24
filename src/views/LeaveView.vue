<template>
  <div class="home">
    <div class="addBox">
      <ColorButton title="Add Leave" @click="addNewLeave" />
    </div>
    <div class="filterBox">
      <div class="searchInputBox">
        <img class="searchIcon" src="@/assets/icons/searchIcon.svg" alt="search" />
        <input 
          class="searchInput" 
          type="text" 
          placeholder="Search..." 
          :value="query"
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
            <th>Employee ID</th>
            <th>Full Name</th>
            <th>Department</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
          <tr v-for="leave in displayeeLeaves" :key="leave.id">
            <td>{{ formattedNumber(leave.id) }}</td>
            <td>{{ leave.name }}</td>
            <td>{{ formattedNumber(leave.department) }}</td>
            <td :class="{'inactive': leave.status === 'Approved', 'active': leave.status === 'Rejected'}">{{ leave.status }}</td>
            <td>
              <div class="viewDetail">
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
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PrivateLayout from '@/components/layout/privateLayout.vue';
import ColorButton from '@/components/colorButton.vue';
import FilterButton from '@/components/filterButton.vue';
import leaveData from '@/data/leave.json';
import nextIcon from '@/assets/icons/nextButton.svg';
import prevIcon from '@/assets/icons/prevButton.svg';
import viewDetails from '@/assets/icons/viewIcon.svg'

const pageSize = 10;

interface Leave {
  id: number;
  name: string;
  department: number;
  reason: string;
  status: string
}

@Options({
  components: {
    PrivateLayout,
    ColorButton,
    FilterButton,
  },
})
export default class LeaveView extends Vue {
  leaveData = leaveData;
  prevIcon = prevIcon;
  nextIcon = nextIcon;
  currentPage = 1;
  pageSize = pageSize; 
  viewDetails = viewDetails;
  filteredLeaves = leaveData as Leave[];
  query = ''

  get totalPages() {
    return Math.ceil(this.filteredLeaves.length / pageSize);
  }

  get displayeeLeaves() {
    const start = (this.currentPage - 1) * pageSize;
    const end = start + pageSize;
    return this.filteredLeaves.slice(start, end);
  }

  formattedNumber(number: number) {
    return number.toString().padStart(4, '0')
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

  addNewLeave() {
    this.$router.push('/add-leave');
  }

  handleQueryChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value
    this.query = value
  }

  handleQueryKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.filteredLeaves = this.leaveData.filter((item) => item.name.toLocaleLowerCase().includes(this.query))
    }
  }
}
</script>

<style lang="scss">
</style>