<template>
   <div class="display-poster">
        <v-poster />
    </div>
   <v-input/>
   <v-table-s3-new :title="store.state.vUserGroup" :group="store.state.vUserGroup" :removeIcon="true"/>
</template>
<script setup>
   import VInput from '../components/v-input.vue'
   import VTableS3New from '../components/v-table-s3-new.vue'
   import vPoster from '../components/v-poster.vue'
   import {useStore} from 'vuex'
   const store=useStore()

</script>
<style>
  
</style>