<template>
    <div class="v-button"
         >
        {{textButton}}
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
    defineProps({
        textButton: String
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