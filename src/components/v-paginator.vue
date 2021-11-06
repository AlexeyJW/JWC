<template>
    <div :class="{active:isAct.isActive}" >
        {{isAct.page}}
    </div>
</template>

<script setup>
   import {useStore} from 'vuex'
   
   const props=defineProps({
       page:{type:Number},
       isActive:{type:Boolean}
     })
        
    const store=useStore()

    let firstPage=false
    if (props.page==1) firstPage=true
    else firstPage=false
    store.commit('SET_PAGINATOR',{
        page:props.page,
        isActive: firstPage})
    
    const isAct=store.getters.PAGINATOR(props.page-1)
    
   
</script>

<style scoped>
   div{
        border: 1px solid lightblue;
        padding:8px;
        margin:5px;
   }
   .active{
       border-color:orange;
   }
</style>