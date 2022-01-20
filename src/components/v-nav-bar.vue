<template>
    <div class="v-nav-bar">
        <h4 class="v-nav-bar-title">Собрание: "Молодёжное"</h4>
        <ul class="nav-ul" >
            <li v-for="(i, index) in items" :key="index"
                class="nav-li"             
            >
            <router-link class="nav-router" 
                         :to="i.path">
                {{i.label}}
            </router-link>
            </li>    
            <li  class="nav-li nav-router logout" @click="logOut">Выйти</li>
        </ul>
        <img class="v-nav-bar-photo" :src="avatar" alt="avatar"/>
        <div class="v-nav-bar-user" @click="admin">
             <h4 class="user-name">{{store.state.vUser}}</h4>
             <h4 class="user-name">{{store.state.vUserEmail}}</h4>
             <h4 class="user-name">Группа: {{store.state.vUserGroup}}</h4>
        </div>
       
    </div>
</template>

<script setup>
   import {ref, computed} from 'vue'
   import {useStore} from 'vuex'
   import {resOut} from '../modules/initFB.js'
   import {useRouter} from 'vue-router'

   const router=useRouter()
   const store=useStore()
   let isActive=ref(false)

   const avatar=computed(()=>store.state.vUserPhoto)
   const role =computed(()=>store.state.vUserRole)

   const items=[
       {id:1, label:'Ввод', path:'/InputV',choice: false}, 
       {id:2, label:'Главная', path:'/',choice: false}, 
       {id:3, label:'Все группы', path:'/AllGroups', choice: false},
       {id:4, label:'Новониколаевка', path:'/Novonikolaevka', choice: false}
  
   ]
   const logOut=()=>{
   
       router.push({name:'Home'})
       store.dispatch('UNSUBSCRIBE')
      
        
       
   }
   const admin=()=>{
       
       if (role.value ==='admin')
            router.push({name:'Admin'})
       else console.log("Отказано")
   }
   
</script>

<style>
    .v-nav-bar{
       display: flex;
       justify-content: space-between;
       align-items:center;
       padding:10px;
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
      
    /* .nav-img{
        width:30px;
        height:30px;
    } */
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
    .v-nav-bar-photo{
         width: 3em;
        height: 3em;
        border: 1px solid lightgrey;
        border-radius: 50%;
    }
    .v-nav-bar-user{
        display:flex;
        flex-direction:column;
        font-size:9px;
        
        color:white;
        /* font-family: 'Microsoft YaHei UI Light', sans-serif; */
        justify-content:center;
        align-items:flex-start;
        height:70px;
        border:1px solid lightgrey;
        /* align-self:flex-end; */
    }
    .v-nav-bar-user:active{
        border:1px solid orange;
    }
    .user-name{
        margin:2px;
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