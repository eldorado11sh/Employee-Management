<template>
  <div>
    <apexchart type="bar" :options="chartOptions" :series="chartSeries"></apexchart>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import VueApexCharts from 'vue3-apexcharts';

@Options({
  components: {
    apexchart: VueApexCharts,
  },
})

export default class StackedBarChart extends Vue {
  @Prop({ type: Object, required: true }) chartOptions!: any;
  @Prop({ type: Array, required: true }) chartSeries!: any[];
}
</script>
