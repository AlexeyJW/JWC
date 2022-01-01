<template>
   <div class="display-poster">
        <v-poster />
    </div>
 
     <v-input/>
     <div class="v-button-block">
             <button class="v-button-month-back" 
                       v-if="isButtonBack"
                       @click="monthBack">
                         <i class="fas fa-angle-left"/>
                    </button>
                    {{convertMonth(monthNow)}} {{yearNow}}
                     <button class="v-button-month-back"
                       v-if="!isButtonBack"
                       @click="monthToNow">
                         <i class="fas fa-angle-right"/>
              </button>
        </div>
     <v-table-s3-input :title="store.state.vUserGroup" :group="store.state.vUserGroup" :year="yearNow" :month="monthNow"/>
  
</template>
<script setup>
   import VInput from '../components/v-input.vue'
   import VTableS3Input from '../components/v-table-s3-input.vue'
   import vPoster from '../components/v-poster.vue'
   import {convertMonth, isServiceYear} from '../modules/convertMonth'
   import {useStore} from 'vuex'
   import {ref} from 'vue'

   const store=useStore()


   //Button back
//заморочка с месяцами и годами
const dateNow=new Date()
const monthNow=ref(Number(dateNow.getMonth()))
const yearNow=ref(dateNow.getFullYear())
const serviceYear=ref(isServiceYear(yearNow.value, monthNow.value))

const isButtonBack=ref(true)
const monthBack=()=>{
   if (monthNow.value==0)
      {
         monthNow.value=11
         yearNow.value-=1
         
      }else {
          monthNow.value-=1
      }
   serviceYear.value=isServiceYear(yearNow.value, monthNow.value)
   isButtonBack.value=!isButtonBack.value
}
const monthToNow=()=>{
   if (monthNow.value==11)
      {
         monthNow.value=0
         yearNow.value+=1
         
      }else {
          monthNow.value+=1
      }
   serviceYear.value=isServiceYear(yearNow.value, monthNow.value)
   isButtonBack.value=!isButtonBack.value
}

//props
const propsYear='2022'
const propsMonth='0'
</script>
<style>
    /* .v-input-group-number{
       display:flex;
       flex-direction: column;
       align-items:center;
       justify-content: center;
       
    } */
</style>