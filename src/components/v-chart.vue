<template>
   <div class="v-chart">
       <BarChart v-bind="barChartProps" />
   </div>
  
   
</template>

<script setup>
import { BarChart, useBarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {convertMonth, isServiceYear, compareMonthForChart} from '../modules/convertMonth'

const store=useStore()

Chart.register(...registerables);
const props=defineProps({
  data:{
    type:Array,
    default:[]
  }
})


const serviceYear=ref(isServiceYear(new Date().getFullYear(), new Date().getMonth()))
const dataArr = computed(()=>store.getters.YEAR_SERVICE(serviceYear.value).sort(compareMonthForChart))
 
const data=computed(() =>{
      let arr=[]
      dataArr.value.forEach(el=>{
             arr.push(el.averageWD)
             arr.push(el.averageWE)
      })
      return arr
})
const labels=computed(()=>{
       let arr=[]
       dataArr.value.forEach(el=>{
         arr.push(convertMonth(el.month)+' (будни)')
         arr.push(convertMonth(el.month)+' (выходные)')
       })
       return arr
})
const bg=computed(() =>{
  let arr=[]
  for (let i=0; i<dataArr.value.length; i++){
    arr.push('#0079AF')
    arr.push('#539b9b')
  }
  return arr
})
    
    const chartData = computed(() => ({
      
      labels: labels.value,
      datasets: [
        {
          label:'Число присутствующих',
          data: data.value,
          backgroundColor: bg.value,
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
       margin-top: 10px;
       box-shadow: 0 0 8px 0 darkgray;
       padding: 10px;
       
   }
</style>