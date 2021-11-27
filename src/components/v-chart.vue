<template>
   <div class="v-chart">
       <BarChart v-bind="barChartProps" />
   </div>
  
   
</template>

<script setup>
import { BarChart, useBarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import {ref, computed, defineProps} from 'vue'
import {useStore} from 'vuex'
import * as convertMonth from '../modules/convertMonth'

const store=useStore()

Chart.register(...registerables);
const props=defineProps({
  data:{
    type:Array,
    default:[]
  }
})
const cM=convertMonth.convertMonth('10')
console.log(cM)

const dataArr = computed(()=>store.getters.YEAR_SERVICE('2022'))
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
         arr.push(convertMonth.convertMonth(el.month)+' (будни)')
         arr.push(convertMonth.convertMonth(el.month)+' (выходные)')
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
          label:'Total of attendees',
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
       margin: 10px;
       box-shadow: 0 0 8px 0 darkgray;
       padding: 10px;
       width:600px;
   }
</style>