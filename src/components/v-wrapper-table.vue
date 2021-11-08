<template>
    <div class="wrapper-table"
         v-for="i in props.groups" :key="i">
         <v-table-s3 :title="i"/>  
         
    </div>
</template>
<script setup>
   import {defineProps} from 'vue'
   import VTableS3 from './v-table-s3.vue'
   const props=defineProps({
       groups:{type:Array}
   })
</script>
<style>
</style>