<template>
    <div class="v-input">
       
        <div class="v-input-content">
        
        <div class="v-input-group" id="left">
            <h5 class="v-input-label">Group:</h5>
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
        </div>
        <div class="v-input-group">
            <h5 class="v-input-label">Week:</h5>
            <select class="field-week-number" v-model="WeekNumber" name='Week' id="week">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            
            </select>
        </div>
        <div class="v-input-group">
            <h5 class="v-input-label">WD/WE:</h5>
            <select  class="field-weekday" name="weekday" v-model="Weekday" id="w">
                <option disabled selected>Choice</option>
                <option value="weekdays">weekdays</option>
                <option value="weekend">weekend</option>
            </select>
        </div>
        
        
        <div class="v-input-group">
            <h5 class="v-input-label">Date:</h5>
            <input class="field-data" type="date" v-model="vDate"/>
        </div>
        <div class="v-input-group">
            <h5 class="v-input-label">Total:</h5>
            <input class="field-input" type="number" placeholder="total" v-model="vTotal" id="total"/>
        </div>
        <div class="v-input-group" id="right">
            <h5 class="v-input-label">Send Report:</h5>
            <v-button class="field-button" textButton="Send" @click="sendObj"/>
        </div>
        
     
     </div>
    </div>
    <span class="v-span" v-if="isConfirm"><v-confirm  @pressedCancel="isConfirm=!isConfirm" @pressedOK="isConfirm=!isConfirm">Record already exists, Want to replace?</v-confirm></span>
     <div  :class="{activeoverflow: isConfirm}"></div>
</template>
   
<script setup>
import VButton from './v-button.vue'
import vConfirm from './v-confirm.vue'
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
const store=useStore()
//----------Date Now----------------------
const dateNow=new Date()
const yearNow=dateNow.getFullYear()
const monthNow=dateNow.getMonth()
//----------------------------------------

const isConfirm=ref(false)
const Group=ref('')
const vDate=ref(null)
const vTotal=ref(null)
const Weekday=ref('')
const WeekNumber=ref(null)
const bd=computed(()=>store.getters.GET_S3(''+yearNow, ''+monthNow))
const isRecord=(obj)=>bd.value.find(el=>el.group==obj.group&& el.weekNumber==obj.weekNumber&& el.weekday==obj.weekday)



const sendObj=()=>{

       const obj={
            month: (vDate.value.slice(5,7)-1).toString(),
            year: vDate.value.slice(0,4),
            yearService:'2022',
            weekday:Weekday.value,
            weekNumber:WeekNumber.value,
            group:Group.value,
            date:vDate.value,
            total:vTotal.value
        }
    if (typeof isRecord(obj)!='object') store.commit('ADD_S3', obj)

    else isConfirm.value=true
    
}  
</script>
   
<style>
   #left{
       border-left:1px solid rgb(83, 155, 155);
       padding-left:10px;
   }
   #right{
       border-right:1px solid rgb(83, 155, 155);
       padding-right: 10px;
   }
    .v-input{
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding: 10px;
        flex-direction:column;
        border:1px solid lightgray;
        box-shadow: 0 0 8px 0 darkgray;
        margin-top:10px;
        width:600px;
  
    }
     .v-input-label{
        align-self:flex-start;
        margin:2px;
        font-size:10px;
        font-weight: lighter;
        color:grey;
       
    }
    .v-input-group{
        display: flex;
        flex-direction: column;
        justify-content:flex-end;
        align-items:flex-end;
        border-top:1px solid rgb(83, 155, 155);
       
        border-bottom:1px solid rgb(83, 155, 155);
       
        /* margin-left:2px; */
        padding:3px;
        /* background:rgb(231, 230, 230); */
    }
   
    .v-input-content{
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
       
    }
    .field-data, .field-select{
        margin-right:5px;
        top:-30;
    }
    .field-input{
        width:60px;
        margin-right:5px;
    }
    .field-weekday{
        width:100px;
    }
   
    .v-span{
         position:absolute;
         top:150px; 
         left:auto;
         z-index:999999;
    }
   .activeoverflow{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.2);
        z-index: 2;
   }
</style>