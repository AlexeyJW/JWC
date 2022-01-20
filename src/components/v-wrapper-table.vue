<template>
        
    <div class="wrapper-table"
         v-for="i in props.groups" :key="i">
         <div v-if="i==store.state.vUserGroup">
            <v-table-s3-new :title="i" :group="i" :removeIcon="true"/>
         </div>
         <div v-else>
             <v-table-s3-new :title="i" :group="i" :removeIcon="false"/>
         </div>
         
         
    </div>
</template>
<script setup>
   import VTableS3New from './v-table-s3-new.vue'
   import {useStore} from 'vuex'
   const store=useStore()
   const props=defineProps({
       groups:{type:Array}
   })

 
</script>
<style>
</style>