<template>
    <div class="v-input">
        <select name="Group" id="group">
            <option value="group1">Group 1</option>
            <option value="group2">Group 2</option>
            <option value="group3">Group 3</option>
            <option value="group4">Group 4</option>
            <option value="group5">Group 5</option>
            <option value="group6">Group 6</option>
            <option value="group7">Group 7</option>
        </select>
        <input type="date" class="field-date">
        <input class="field-input" type="number" placeholder="total"/>
        <v-button class="field-button" textButton="Send"/>
    </div>
</template>

<script setup>
import VButton from './v-button.vue'

</script>
   
<style>
    .v-input{
        display: flex;
        /* flex-direction: row; */
        padding: 10px;

        align-items: stretch;
        
       
    }
    .field-button{
        margin-left: 10px;
    }
</style>