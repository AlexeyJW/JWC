<template>
    <div class="v-input-lable">
        <h4>Group:</h4>
        <h4>Week:</h4>
        <h4>Weekdays/Weekend</h4>
        <h4>Date:</h4>
        <h4>Total:</h4>
     </div>
    <div class="v-input">
        
      
        <select class="field-select" v-model="Group" id="group">
            <option disabled selected>Choice group</option>
            <option value="1">Group 1</option>
            <option value="2">Group 2</option>
            <option value="3">Group 3</option>
            <option value="4">Group 4</option>
            <option value="5">Group 5</option>
            <option value="6">Group 6</option>
            <option value="7">Group 7</option>
        </select>
        <select class="field-week-number" v-model="WeekNumber" name='Week'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
           
        </select>
        <select  class="field-weekday" name="weekday" v-model="Weekday">
            <option disabled selected>Choice</option>
            <option value="weekdays">weekdays</option>
            <option value="weekend">weekend</option>
        </select>
        <input class="field-data" type="date" v-model="vDate"/>
        <input class="field-input" type="number" placeholder="total" v-model="vTotal"/>
        <v-button class="field-button" textButton="Send" @click="sendObj"/>
    </div>
</template>
   
<script setup>
import VButton from './v-button.vue'
import {ref} from 'vue'
import {useStore} from 'vuex'
const store=useStore()

const Group=ref('')
const vDate=ref(null)
const vTotal=ref(null)
const Weekday=ref('')
const WeekNumber=ref(null)
const sendObj=()=>{

       const obj={
            month: (vDate.value.slice(5,7)-1).toString(),
            year: vDate.value.slice(0,4),
            weekday:Weekday.value,
            weekNumber:WeekNumber.value,
            group:Group.value,
            date:vDate.value,
            total:vTotal.value
        }
  
    store.commit('ADD_S3', obj)
}
</script>
   
<style>
    
    .v-input{
        display: flex;
        /* flex-direction: row; */
        padding: 10px;
        align-items: stretch;
        border:1px solid lightgray;
        box-shadow: 0 0 8px 0 darkgray;
        margin-top:10px;
        width:600px;
  
    }
    .field-data, .field-select{
        margin-right:5px;
    }
    .field-input{
        width:60px;
        margin-right:5px;
    }
    .field-weekday{
        width:100px;
    }
    .v-input-lable{
        display:flex;
        flex-direction:row;
        justify-content:center;
        color:gray;
        font-size:thin;
        
    }
  
   
</style>