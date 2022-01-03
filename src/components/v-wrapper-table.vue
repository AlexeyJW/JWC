<template>
    
      <!-- <div class="v-button-block">
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
        </div> -->
    
    <div class="wrapper-table"
         v-for="i in props.groups" :key="i">
         <!-- <v-table-s3-input :title="i" :group="i" :year="yearNow" :month="monthNow"/>   -->
         <v-table-s3-new :title="i" :group="i"/>
         
    </div>
</template>
<script setup>
   // import {ref} from 'vue'
   //  import {convertMonth, isServiceYear} from '../modules/convertMonth'
//    import VTableS3 from './v-table-s3.vue'
   // import VTableS3Input from './v-table-s3-input.vue'
   import VTableS3New from './v-table-s3-new.vue'
   const props=defineProps({
       groups:{type:Array}
   })

   //===========================
//    const dateNow=new Date()
// const monthNow=ref(Number(dateNow.getMonth()))
// const yearNow=ref(dateNow.getFullYear())
// const serviceYear=ref(isServiceYear(yearNow.value, monthNow.value))

// const isButtonBack=ref(true)
// const monthBack=()=>{
//    if (monthNow.value==0)
//       {
//          monthNow.value=11
//          yearNow.value-=1
         
//       }else {
//           monthNow.value-=1
//       }
//    serviceYear.value=isServiceYear(yearNow.value, monthNow.value)
//    isButtonBack.value=!isButtonBack.value
// }
// const monthToNow=()=>{
//    if (monthNow.value==11)
//       {
//          monthNow.value=0
//          yearNow.value+=1
         
//       }else {
//           monthNow.value+=1
//       }
//    serviceYear.value=isServiceYear(yearNow.value, monthNow.value)
//    isButtonBack.value=!isButtonBack.value
// }
</script>
<style>
</style>