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
        display: flex;
        align-items:center;
        justify-content: center;
        border: 1px solid #888;
        width: 60px;
        height: 25px;
        color: white;
        font-family: 'Microsoft YaHei UI Light', sans-serif;
        font-size:15px;
         font-weight: lighter;
        
   }
   .v-button:active{
       border: 1px solid orange;
   }
</style>