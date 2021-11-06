<template>
    <div>
        <h3><strong>Group {{groupNumber}}</strong></h3>
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