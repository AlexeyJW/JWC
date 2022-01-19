<template>
    <div class="display-poster">
        <v-poster />
    </div>
    <v-title :groupNumber="paginator" /> 
    
    <v-wrapper-table :groups="paginator"/>
 
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
   import VTitle from '../components/v-title.vue'
   import VWrapperTable from '../components/v-wrapper-table.vue'
   import vPoster from '../components/v-poster.vue'
   
   const store=useStore()
   const groupNumber=2
   let pageNumber=ref(store.getters.ACTIVE_PAGE)
   const pages=Math.ceil(store.state.groups/groupNumber)
   let isActive=ref(false)
   const paginator=computed(()=>{
     let from=(pageNumber.value-1)*groupNumber
     let to=from+groupNumber
     return store.state.groupsData.slice(from, to)})  

const pageClick=page=>{
  pageNumber.value=page
 
  isActive.value=true
  store.commit('SET_FALSE')
  store.commit('SET_IS_ACTIVE',{index:page-1, newIsActive:true})
  store.commit('SET_ACTIVE_PAGE', page)
}
</script>

<style>
 
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