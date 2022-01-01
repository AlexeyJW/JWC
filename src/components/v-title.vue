<template>
    <div>
        <h4><strong>Группы: {{groupNumber}}</strong></h4>
    </div>
</template>

<script setup>
   import {defineProps} from 'vue'
   defineProps({
       groupNumber:Number
   })
</script>

<style>

</style>