<template>
   <div class="v-chart">
       <LineChart v-bind="lineChartProps" />
   </div>
  
   
</template>

<script setup>
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {isServiceYear, compareMonthForChart, convertMonth} from '../modules/convertMonth'

const store=useStore()

Chart.register(...registerables);
const props=defineProps({
  data:{
    type:Array,
    default:[]
  }
})

const serviceYear=ref(isServiceYear(new Date().getFullYear(), new Date().getMonth()))
const dataArr = computed(()=>store.getters.YEAR_SERVICE_N(serviceYear.value).sort(compareMonthForChart))
 
const dataWD=computed(() =>{
      let arr=[]
      dataArr.value.forEach(el=>{
             arr.push(el.averageWD)
            
      })
      return arr
})
const dataWE=computed(() =>{
      let arr=[]
      dataArr.value.forEach(el=>{
            
             arr.push(el.averageWE)
      })
      return arr
})



const labels=computed(()=>{
       let arr=[]
       dataArr.value.forEach(el=>{
             arr.push(convertMonth(el.month))
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
          label:'Будни',
          data: dataWD.value,
          backgroundColor: bg.value,
          borderColor:'#0079AF'
        },
        {
          label:'Выходные',
          data: dataWE.value,
          backgroundColor: bg.value,
          borderColor:'#539b9b'
        },
      ],
    }));

    const { lineChartProps, lineChartRef } = useLineChart({
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