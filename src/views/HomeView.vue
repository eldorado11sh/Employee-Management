<template>
  <div class="home">
    <div class="statusBox">
      <StatusCard 
        title="Employees"
        :totalNumber=95800
        :increaseRate=54
        :decreaseRate=21
        bgColor="#EBFDEF"
        :icon="employeeIcon"
        iconBgColor="#5EBB73"
      />
      <StatusCard 
        title="Departments"
        :totalNumber=95800
        :increaseRate=54
        :decreaseRate=21
        bgColor="#E8EFF9"
        :icon="departmentsIcon"
        iconBgColor="#A288EC" 
      />
      <StatusCard 
        title="Leaves Requests"
        :totalNumber=95800
        :increaseRate=54
        :decreaseRate=21
        bgColor="#FFEFE7"
        :icon="employeeIcon"
        iconBgColor="#FFA071" 
      />
    </div>
    <div class="chartBox">
      <div class="chartTitle">Employee per department</div>
      <StackedBarChart :chart-options="chartOptions" :chart-series="chartSeries" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PrivateLayout from '@/components/layout/privateLayout.vue';
import StatusCard from '@/components/statusCard.vue';
import employeeIcon  from '@/assets/icons/employee_white.svg';
import departmentsIcon from '@/assets/icons/departments_white.svg';
import StackedBarChart from '@/components/StackedBarChart.vue';

@Options({
  components: {
    PrivateLayout,
    StatusCard, 
    StackedBarChart
  },
})
export default class HomeView extends Vue {
  employeeIcon = employeeIcon;
  departmentsIcon = departmentsIcon;

  public chartOptions = {
    chart: {
      type: 'bar',
      stacked: true,
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '30%', 
        borderRadius: 5,
      },
    },
    colors: ['#A288EC', '#5DBB73', '#FFA071'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      axisBorder: {
        show: false,
      },
    },
    legend: {
      position: 'top',
      itemMargin: {
        horizontal: 20, 
      },
      fontSize: '16px', 
      fontFamily: 'PrimaryFont', 
      fontWeight: 'bold', 
      markers: {
        radius: 6
      }
    },
  };

  public chartSeries = [
    {
      name: 'P.Digital',
      data: [30, 40, 25, 50, 49, 21, 70, 20, 40, 50, 10, 23],
    },
    {
      name: 'Digital',
      data: [30, 40, 25, 50, 49, 21, 70, 20, 40, 50, 10, 23],
    },
    {
      name: 'Digital and Commercial Platforms',
      data: [20, 40, 25, 50, 49, 21, 70, 20, 40, 50, 10, 23],
    },
  ];
}
</script>

<style lang="scss">
  .home {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .statusBox {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .chartBox {
      width: 50%;
      .chartTitle {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 50px;
      }
    }
  }
</style>