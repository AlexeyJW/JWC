<template>
    <div class="v-nav-bar">
        <h4 class="v-nav-bar-title">Congrigation Molodyozhnoje</h4>
        <ul class="nav-ul" >
            <li v-for="(i, index) in items" :key="index"
                class="nav-li"             
            >
            <router-link class="nav-router" 
                         :to="i.path">
                {{i.label}}
            </router-link>
            </li>    
        </ul>
    </div>
</template>

<script setup>
   import {ref} from 'vue'
   let isActive=ref(false)
   const items=[
       {id:1, label:'Input', path:'/InputV',choice: false,}, 
       {id:2, label:'General', path:'/',choice: false}, 
       {id:3, label:'All Groups', path:'/AllGroups', choice: false},
       {id:4, label:'Logout', path:'/Auth', choice: false}
   ]
  

   
</script>

<style>
    .v-nav-bar{
       display: flex;
       justify-content: center;
       align-items:center;
       background:rgb(83, 155, 155);
    }
    .v-nav-bar-title{
        justify-content:flex-start;
        color:white;
        font-family: 'Microsoft YaHei UI Light', sans-serif;
        font-weight: lighter;
    }
    .nav-li{
        display:inline-block;
       
        margin-right:10px;
        padding:5px;
        /* border: 1px solid lightgray; */
        border-bottom: 2px solid rgb(83, 155, 155);
      
       
       
       

    }
    /* .nav-li:hover{
      
          border-bottom: 2px solid rgb(227, 241, 241);
    } */
     /* .nav-li:active{
      
          border-bottom: 2px solid rgb(227, 241, 241);
    } */
    
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
    
    .router-link-exact-active{
       
         border-bottom: 2px solid rgb(227, 241, 241);
    }
</style>