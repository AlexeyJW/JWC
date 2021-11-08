<template>
   <div class="v-chart">
       <BarChart v-bind="barChartProps" />
   </div>
  
   
</template>

<script setup>
import { BarChart, useBarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import {ref, computed, defineProps} from 'vue'
Chart.register(...registerables);
const props=defineProps({
  data:{
    type:Array,
    default:[]
  }
})

const data = ref([30, 40, 60, 70, 85,115]);

    const chartData = computed(() => ({
      labels: ['September', 'October', 'November', 'December', 'January', 'February','Mach','April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED','#77CEFF'],
        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
    });

    function shuffleData() {
      data.value = shuffle(data.value);
    }

</script>

<style>
   .v-chart{
   
      display: flex;
       flex-direction: column;
       justify-content: center;
        border: 1px solid lightgray;
        margin: 10px;
        box-shadow: 0 0 8px 0 darkgray;
        padding: 10px;
        /* flex-basis:500px; */
        width:600px;
   }
</style>