<template>
  <div class="all-group">
    <v-title :groupNumber="paginator" /> 
    <v-table-s3/>
  </div>
    <div class="pagination">
       <div v-for="i in pages" :key="i">
         
              <v-paginator 
                  :page="i" 
                  :isActive="isActive"
                  @click="pageClick(i)"/>
      </div>
   </div>
  
</template>

<script setup>
   import { useStore } from 'vuex';
   import {ref, computed} from 'vue'
   import vPaginator from '../components/v-paginator.vue'
   import VTableS3 from '../components/v-table-s3.vue';
   import VTitle from '../components/v-title.vue'

   const store=useStore()
   const groupNumber=1
   let pageNumber=ref(store.getters.ACTIVE_PAGE)
   const pages=Math.ceil(store.state.groups/groupNumber)
   let isActive=ref(false)
   const paginator=computed(()=>{
     let from=(pageNumber.value-1)*groupNumber
     let to=from+groupNumber
     return store.state.groupsData.slice(from, to)})  

const pageClick=page=>{
  pageNumber.value=page
  // color.value='lightblue'
  isActive.value=true
  store.commit('SET_FALSE')
  store.commit('SET_IS_ACTIVE',{index:page-1, newIsActive:true})
  store.commit('SET_ACTIVE_PAGE', page)
}
</script>

<style>
 .all-group{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
  .pagination{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
        
      
   }
  div {
    caret-color: transparent;
  }
</style>