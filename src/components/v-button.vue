<template>
    <div class="v-button"
         >
        {{msg}}
    </div>
</template>

<script setup>
    const props=defineProps({
        msg:{
            type:String,
            default:'Button'
        }
    })
</script>

<style>
   .v-button{
        border: 1px solid #888;
        width: 60px;
        height: 20px;
        
   }
   .v-button:active{
       border: 1px solid orange;
   }
</style>