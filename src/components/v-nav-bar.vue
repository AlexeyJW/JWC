<template>
    <div class="v-nav-bar">
        <ul class="nav-ul">
            <li class="nav-li"><router-link to='/InputV'>Input</router-link></li>
            <li class="nav-li"><router-link to='/'>General</router-link></li>
            <li class="nav-li"><router-link to='/AllGroups'>All Groups</router-link></li>
            <li class="nav-li"><router-link to='/Auth'>Logout</router-link></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style>
    .v-nav-bar{
       display: flex;
       justify-content: center;
    }
    .nav-li{
        display:inline-block;
        border:1px solid lightgray;
        margin-right:10px;
        padding:5px;
    }
    .nav-img{
        width:30px;
        height:30px;
    }
    
</style>