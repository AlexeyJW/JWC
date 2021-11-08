<template>
    <div class="v-nav-bar">
        <ul class="nav-ul">
            <li class="nav-li"><router-link class="nav-router" to='/InputV'>Input</router-link></li>
            <li class="nav-li"><router-link class="nav-router" to='/'>General</router-link></li>
            <li class="nav-li"><router-link class="nav-router" to='/AllGroups'>All Groups</router-link></li>
            <li class="nav-li auth"><router-link class="nav-router" to='/Auth'>Logout</router-link></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style>
    .v-nav-bar{
       display: flex;
       justify-content: center;
       background:rgb(83, 155, 155);
    }
    /* .nav-ul{
        display:flex;
        flex-direction:row;
        background:white;
    } */
    /* .nav-li{
        border:1px solid gray;
        margin-right:10px;
        padding:5px;

    } */
    .nav-li{
        display:inline-block;
       
        margin-right:10px;
        padding:5px;
        border: 1px solid lightgray;
      
       
       
       

    }
    .nav-li:hover{
        /* background:#b8600e; */
         box-shadow: 0 0 8px 0 rgb(216, 235, 221);
    }
    
    .nav-img{
        width:30px;
        height:30px;
    }
    .auth{
        align-self: flex-end;
    }
    .nav-router{
        text-decoration: none;
        color: white;
    }
</style>