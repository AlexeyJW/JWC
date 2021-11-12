<template>
    <div class="v-input">
      
        <select class="field-select" v-model="Group" id="group">
            <option value="1">Group 1</option>
            <option value="2">Group 2</option>
            <option value="3">Group 3</option>
            <option value="4">Group 4</option>
            <option value="5">Group 5</option>
            <option value="6">Group 6</option>
            <option value="7" selected>Group 7</option>
        </select>
        <select  class="field-weekday" name="weekday" v-model="Weekday" placeholder="weekday">
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

const sendObj=()=>{
       const obj={
            month: (vDate.value.slice(5,7)-1).toString(),
            year: vDate.value.slice(0,4),
            weekday:Weekday.value,
            weekNumber:1,
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
    
  
   
</style>