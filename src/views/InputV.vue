<template>
   <div class="display-poster">
        <v-poster />
    </div>
 
     <v-input/>
     <v-table-s3 :title="store.state.vUserGroup" :group="store.state.vUserGroup"/>
  
</template>
<script setup>
   import VInput from '../components/v-input.vue'
   import VTableS3 from '../components/v-table-s3.vue'
   import vPoster from '../components/v-poster.vue'
   import {useStore} from 'vuex'

   const store=useStore()
</script>
<style>
    /* .v-input-group-number{
       display:flex;
       flex-direction: column;
       align-items:center;
       justify-content: center;
       
    } */
</style>