<template>
    <div class="v-button" :style="{background:props.colorButton}"
         >
        {{props.textButton}}
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
    const props=defineProps({
        textButton: {type:String},
        colorButton:{type:String,
               default:'rgb(83, 155, 155)'}
    })
    const styleObject={
        background:props.colorButton
    }
</script>

<style>
   .v-button{

        border: 1px solid #888;
        width: 60px;
        height: 25px;
        /* background:rgb(83, 155, 155); */
        color: white;
        vertical-align:middle;
        
   }
   .v-button:active{
       border: 1px solid orange;
   }
</style>