<template>
  <div class="v-input-group-number">
     <v-input/>
     <v-table-s3 :title="store.state.vUserGroup" :group="store.state.vUserGroup"/>
  </div>
</template>
<script setup>
   import VInput from '../components/v-input.vue'
   import VTableS3 from '../components/v-table-s3.vue'
   import {useStore} from 'vuex'

   const store=useStore()
</script>
<style>
    .v-input-group-number{
       display:flex;
       flex-direction: column;
       align-items:center;
       justify-content: center;
       
    }
</style>