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
            <li  class="nav-li nav-router logout" @click="logOut">Logout</li>
        </ul>
        <h4 class="v-nav-bar-user">{{user}}</h4>
    </div>
</template>

<script setup>
   import {ref, computed} from 'vue'
   import {useStore} from 'vuex'
   import {resOut} from '../modules/initFB.js'

   const store=useStore()
   let isActive=ref(false)
   const user=computed(()=>store.getters.GET_VUSER)
   const items=[
       {id:1, label:'Input', path:'/InputV',choice: false,}, 
       {id:2, label:'General', path:'/',choice: false}, 
       {id:3, label:'All Groups', path:'/AllGroups', choice: false}
    //    {id:4, label:'Logout', path:'/Auth', choice: false}
   ]
   const logOut=()=>{
       const r=resOut()
       console.log(r)
       
       store.commit('SET_IS_AUTH')
   }
   
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
        border-bottom: 2px solid rgb(83, 155, 155);
     
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
    
    .router-link-exact-active{
        border-bottom: 2px solid rgb(227, 241, 241);
    }
    .v-nav-bar-user{
        font-size:10px;
        color:white;
        font-family: 'Microsoft YaHei UI Light', sans-serif;
        align-self:flex-end;
    }
    .logout{
        border:1px solid white;

    }
    .logout:active{
        border:1px solid orange;

    }
    .logout:hover{
        border:1px solid orange;
        color:orange;

    }
</style>